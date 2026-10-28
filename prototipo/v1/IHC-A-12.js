/**
 * Módulo IHC-A-12: Recuperación de Sesión y Verificación Final
 * Responsable: Sebastián (@SebasIsd)
 * Versión: 1.0
 */

document.addEventListener('DOMContentLoaded', () => {
    initSessionRecoveryModule();
});

function initSessionRecoveryModule() {
    // Elementos del DOM
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
    
    // Estadísticas
    const completedItemsEl = document.getElementById('completed-items');
    const pendingItemsEl = document.getElementById('pending-items');
    const completionPercentageEl = document.getElementById('completion-percentage');

    // Estado
    let totalItems = checkboxes.length;

    // Detectar si hay sesión interrumpida
    const interruptedSession = localStorage.getItem('session-interrupted');
    const lastCompletedStep = localStorage.getItem('audit-last-step') || '0';
    
    if (interruptedSession === 'true' && recoveryBanner) {
        recoveryBanner.classList.remove('hidden');
        document.getElementById('recovery-step').textContent = lastCompletedStep;
        
        // Restaurar datos de la sesión
        restoreSession();
        
        // Limpiar flag de interrupción
        localStorage.removeItem('session-interrupted');
    }

    // Cargar estado guardado
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`audit-checklist-${index}`);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
        
        checkbox.addEventListener('change', () => {
            localStorage.setItem(`audit-checklist-${index}`, checkbox.checked);
            updateStatistics();
            saveLastActivity();
        });
    });

    // Event Listeners
    if (btnCloseSession) {
        btnCloseSession.addEventListener('click', handleCloseSession);
    }
    
    if (btnContinueSession) {
        btnContinueSession.addEventListener('click', () => {
            recoveryBanner.classList.add('hidden');
            // Scroll al último paso no completado
            scrollToLastIncomplete();
        });
    }
    
    if (btnNewSession) {
        btnNewSession.addEventListener('click', () => {
            if (confirm('¿Estás seguro de iniciar una nueva sesión? Se perderán los datos de la sesión anterior.')) {
                localStorage.clear();
                recoveryBanner.classList.add('hidden');
                location.reload();
            }
        });
    }
    
    if (btnReviewPending) {
        btnReviewPending.addEventListener('click', () => {
            sessionCloseModal.style.display = 'none';
            scrollToLastIncomplete();
        });
    }
    
    if (btnCancelClose) {
        btnCancelClose.addEventListener('click', () => {
            finalConfirmModal.style.display = 'none';
        });
    }
    
    if (btnConfirmClose) {
        btnConfirmClose.addEventListener('click', () => {
            confirmSessionClose();
        });
    }

    // Funciones
    function updateStatistics() {
        const completed = document.querySelectorAll('.checklist-checkbox:checked').length;
        const pending = totalItems - completed;
        const percentage = Math.round((completed / totalItems) * 100);
        
        if (completedItemsEl) completedItemsEl.textContent = completed;
        if (pendingItemsEl) pendingItemsEl.textContent = pending;
        if (completionPercentageEl) completionPercentageEl.textContent = `${percentage}%`;
    }

    function handleCloseSession(e) {
        const completed = document.querySelectorAll('.checklist-checkbox:checked').length;
        const percentage = (completed / totalItems) * 100;
        
        if (percentage < 100) {
            // ÉXITO FALSO: Bloquear y mostrar modal de advertencia
            e.preventDefault();
            showBlockingModal(completed, percentage);
            
            // Marcar sesión como interrumpida
            localStorage.setItem('session-interrupted', 'true');
            localStorage.setItem('audit-last-step', Math.floor(percentage / 16.67).toString());
        } else {
            // Mostrar modal de confirmación final
            showFinalConfirmationModal();
        }
    }

    function showBlockingModal(completed, percentage) {
        if (sessionCloseModal) {
            // Generar lista de items pendientes
            const pendingItems = [];
            checkboxes.forEach((checkbox, index) => {
                if (!checkbox.checked) {
                    const text = checkbox.nextElementSibling.nextElementSibling?.textContent || `Ítem ${index + 1}`;
                    pendingItems.push(text);
                }
            });
            
            // Actualizar contenido del modal
            if (pendingItemsList) {
                pendingItemsList.innerHTML = `
                    <ul>
                        ${pendingItems.slice(0, 5).map(item => `<li>${item}</li>`).join('')}
                        ${pendingItems.length > 5 ? `<li>... y ${pendingItems.length - 5} más</li>` : ''}
                    </ul>
                `;
            }
            
            if (closeSummaryText) {
                closeSummaryText.textContent = `Completados: ${completed} de ${totalItems} ítems (${Math.round(percentage)}%)`;
            }
            
            sessionCloseModal.style.display = 'flex';
            sessionCloseModal.setAttribute('aria-hidden', 'false');
        }
    }

    function showFinalConfirmationModal() {
        if (finalConfirmModal) {
            // Actualizar fecha
            if (auditDate) {
                auditDate.textContent = new Date().toLocaleString('es-ES');
            }
            
            finalConfirmModal.style.display = 'flex';
            finalConfirmModal.setAttribute('aria-hidden', 'false');
        }
    }

    function confirmSessionClose() {
        // Cerrar sesión exitosamente
        alert('✅ Sesión de auditoría cerrada exitosamente.\n\nGracias por completar la auditoría UX.');
        
        // Limpiar localStorage
        localStorage.clear();
        
        // Redirigir o recargar
        location.reload();
    }

    function restoreSession() {
        // Restaurar checkboxes desde localStorage
        checkboxes.forEach((checkbox, index) => {
            const savedState = localStorage.getItem(`audit-checklist-${index}`);
            if (savedState === 'true') {
                checkbox.checked = true;
            }
        });
        
        updateStatistics();
    }

    function scrollToLastIncomplete() {
        // Encontrar el primer checkbox no marcado
        const firstIncomplete = Array.from(checkboxes).find(cb => !cb.checked);
        
        if (firstIncomplete) {
            firstIncomplete.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstIncomplete.focus();
        }
    }

    function saveLastActivity() {
        const completed = document.querySelectorAll('.checklist-checkbox:checked').length;
        const percentage = Math.round((completed / totalItems) * 100);
        const currentStep = Math.ceil(percentage / 16.67); // 6 pasos = 16.67% cada uno
        
        localStorage.setItem('audit-last-step', currentStep.toString());
        localStorage.setItem('audit-last-saved', new Date().toISOString());
    }

    // Prevenir cierre accidental de pestaña
    window.addEventListener('beforeunload', (e) => {
        const completed = document.querySelectorAll('.checklist-checkbox:checked').length;
        
        if (completed < totalItems && completed > 0) {
            e.preventDefault();
            e.returnValue = '';
            
            // Marcar sesión como interrumpida
            localStorage.setItem('session-interrupted', 'true');
        }
    });

    // Inicializar estadísticas
    updateStatistics();
}