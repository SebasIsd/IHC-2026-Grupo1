/**
 * Módulo IHC-A-12 v2: Recuperación de Sesión y Verificación Final
 * Parches aplicados:
 *   - Revisión previa obligatoria con resumen
 *   - Lista detallada de pendientes por categoría
 *   - Bloqueo estricto de éxito falso
 *   - Banner de recuperación contextual
 * Responsable: Sebastián (@SebasIsd)
 * Versión: 2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    initSessionRecoveryModuleV2();
});

function initSessionRecoveryModuleV2() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const btnCloseSession = document.getElementById('btn-close-session');
    const sessionCloseModal = document.getElementById('session-close-modal');
    const finalConfirmModal = document.getElementById('final-confirm-modal');
    const recoveryBanner = document.getElementById('recovery-banner');
    const btnContinueSession = document.getElementById('btn-continue-session');
    const btnNewSession = document.getElementById('btn-new-session');
    const btnReviewPending = document.getElementById('btn-review-pending');
    const btnCancelClose = document.getElementById('btn-cancel-close');
    const btnConfirmClose = document.getElementById('btn-confirm-close');
    const pendingItemsList = document.getElementById('pending-items-list');
    const closeSummaryText = document.getElementById('close-summary-text');
    const auditDate = document.getElementById('audit-date');

    const completedItemsEl = document.getElementById('completed-items');
    const pendingItemsEl = document.getElementById('pending-items');
    const completionPercentageEl = document.getElementById('completion-percentage');

    let totalItems = checkboxes.length;

    // === PARCHE 1: Detección de sesión interrumpida ===
    const interruptedSession = localStorage.getItem('session-interrupted');
    const lastCompletedStep = localStorage.getItem('audit-last-step') || '0';
    const savedAt = localStorage.getItem('audit-last-saved');

    if (interruptedSession === 'true' && recoveryBanner) {
        recoveryBanner.classList.remove('hidden');
        document.getElementById('recovery-step').textContent = lastCompletedStep;

        if (savedAt) {
            const recoveryTime = new Date(savedAt).toLocaleString('es-ES', {
                day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
            });
            const recoveryInfo = recoveryBanner.querySelector('.recovery-text p');
            if (recoveryInfo) {
                recoveryInfo.innerHTML = `Último paso completado: <strong>${lastCompletedStep} de 6</strong> · Guardado: ${recoveryTime}`;
            }
        }

        restoreSession();
        localStorage.removeItem('session-interrupted');
    }

    // Cargar estado
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`audit-checklist-${index}`);
        if (savedState === 'true') checkbox.checked = true;

        checkbox.addEventListener('change', () => {
            localStorage.setItem(`audit-checklist-${index}`, checkbox.checked);
            updateStatistics();
            saveLastActivity();
        });
    });

    // Event Listeners
    if (btnCloseSession) btnCloseSession.addEventListener('click', handleCloseSession);
    if (btnContinueSession) btnContinueSession.addEventListener('click', () => {
        recoveryBanner.classList.add('hidden');
        scrollToLastIncomplete();
    });
    if (btnNewSession) btnNewSession.addEventListener('click', () => {
        if (confirm('¿Iniciar nueva sesión? Se perderán los datos anteriores.')) {
            localStorage.clear();
            recoveryBanner.classList.add('hidden');
            location.reload();
        }
    });
    if (btnReviewPending) btnReviewPending.addEventListener('click', () => {
        sessionCloseModal.style.display = 'none';
        scrollToLastIncomplete();
    });
    if (btnCancelClose) btnCancelClose.addEventListener('click', () => {
        finalConfirmModal.style.display = 'none';
    });
    if (btnConfirmClose) btnConfirmClose.addEventListener('click', confirmSessionClose);

    // === Funciones ===

    function updateStatistics() {
        const completed = document.querySelectorAll('.checklist-checkbox:checked').length;
        const pending = totalItems - completed;
        const percentage = Math.round((completed / totalItems) * 100);

        if (completedItemsEl) completedItemsEl.textContent = completed;
        if (pendingItemsEl) pendingItemsEl.textContent = pending;
        if (completionPercentageEl) completionPercentageEl.textContent = `${percentage}%`;
    }

    // === PARCHE 2: Validación estricta con resumen ===
    function handleCloseSession(e) {
        const completed = document.querySelectorAll('.checklist-checkbox:checked').length;
        const percentage = (completed / totalItems) * 100;

        if (percentage < 100) {
            e.preventDefault();
            showBlockingModal(completed, percentage);
            localStorage.setItem('session-interrupted', 'true');
            localStorage.setItem('audit-last-step', Math.floor(percentage / 16.67).toString());
        } else {
            showFinalConfirmationModal();
        }
    }

    // === PARCHE 3: Lista detallada de pendientes por categoría ===
    function showBlockingModal(completed, percentage) {
        if (!sessionCloseModal) return;

        const pendingByCategory = {};
        checkboxes.forEach((checkbox, index) => {
            if (!checkbox.checked) {
                const category = checkbox.dataset.category || 'general';
                const text = checkbox.nextElementSibling?.nextElementSibling?.textContent || `Ítem ${index + 1}`;
                if (!pendingByCategory[category]) pendingByCategory[category] = [];
                pendingByCategory[category].push(text);
            }
        });

        // Generar HTML agrupado
        let pendingHTML = '<ul class="pending-grouped-list">';
        const categoryLabels = {
            general: '📋 Información General',
            usability: '⚙️ Usabilidad',
            accessibility: '♿ Accesibilidad',
            visual: '🎨 Diseño Visual',
            performance: '⚡ Rendimiento',
            conclusion: '✅ Conclusión'
        };

        Object.entries(pendingByCategory).forEach(([cat, items]) => {
            pendingHTML += `<li class="pending-category">
                <strong>${categoryLabels[cat] || cat}</strong>
                <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
            </li>`;
        });
        pendingHTML += '</ul>';

        if (pendingItemsList) pendingItemsList.innerHTML = pendingHTML;
        if (closeSummaryText) {
            closeSummaryText.innerHTML = `
                <strong>Progreso actual:</strong> ${completed} de ${totalItems} ítems completados 
                (<strong>${Math.round(percentage)}%</strong>)<br>
                <span style="color: var(--color-danger);">
                    ️ Faltan ${totalItems - completed} ítems por verificar antes de cerrar.
                </span>
            `;
        }

        sessionCloseModal.style.display = 'flex';
        sessionCloseModal.setAttribute('aria-hidden', 'false');
    }

    function showFinalConfirmationModal() {
        if (!finalConfirmModal) return;

        if (auditDate) auditDate.textContent = new Date().toLocaleString('es-ES');

        finalConfirmModal.style.display = 'flex';
        finalConfirmModal.setAttribute('aria-hidden', 'false');
    }

    function confirmSessionClose() {
        const summary = {
            completedAt: new Date().toISOString(),
            totalItems: totalItems,
            completedItems: document.querySelectorAll('.checklist-checkbox:checked').length
        };
        localStorage.setItem('audit-final-summary', JSON.stringify(summary));

        alert('✅ Sesión de auditoría cerrada exitosamente.\n\nGracias por completar la auditoría UX.');
        localStorage.clear();
        location.reload();
    }

    function restoreSession() {
        checkboxes.forEach((checkbox, index) => {
            const savedState = localStorage.getItem(`audit-checklist-${index}`);
            if (savedState === 'true') checkbox.checked = true;
        });
        updateStatistics();
    }

    function scrollToLastIncomplete() {
        const firstIncomplete = Array.from(checkboxes).find(cb => !cb.checked);
        if (firstIncomplete) {
            firstIncomplete.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => firstIncomplete.focus(), 500);
        }
    }

    function saveLastActivity() {
        const completed = document.querySelectorAll('.checklist-checkbox:checked').length;
        const percentage = Math.round((completed / totalItems) * 100);
        const currentStep = Math.ceil(percentage / 16.67);

        localStorage.setItem('audit-last-step', currentStep.toString());
        localStorage.setItem('audit-last-saved', new Date().toISOString());
    }

    // Prevenir cierre accidental
    window.addEventListener('beforeunload', (e) => {
        const completed = document.querySelectorAll('.checklist-checkbox:checked').length;
        if (completed < totalItems && completed > 0) {
            e.preventDefault();
            e.returnValue = '';
            localStorage.setItem('session-interrupted', 'true');
        }
    });

    updateStatistics();
}