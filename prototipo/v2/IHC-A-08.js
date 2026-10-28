/**
 * Módulo IHC-A-08 v2: Persistencia de Datos en Checklist
 * Parches aplicados:
 *   - Diferenciación visual Guardado/Pendiente
 *   - Porcentaje de progreso real por paso
 *   - Auto-guardado con debounce
 *   - Timestamp de último guardado
 * Responsable: Sebastián (@SebasIsd)
 * Versión: 2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    initChecklistModuleV2();
});

function initChecklistModuleV2() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const progressBar = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const saveBadge = document.getElementById('save-badge');
    const saveText = saveBadge?.querySelector('.save-text');
    const steps = document.querySelectorAll('.stepper-step');
    const stepContents = document.querySelectorAll('.step-content');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    let currentStep = 1;
    const totalSteps = 6;
    let saveTimeout = null;

    // === PARCHE 1: Cargar estado desde localStorage ===
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`checklist-item-${index}`);
        const savedTimestamp = localStorage.getItem(`checklist-item-${index}-timestamp`);

        if (savedState === 'true') {
            checkbox.checked = true;
            updateItemVisualState(checkbox, 'saved', savedTimestamp);
        } else {
            updateItemVisualState(checkbox, 'pending');
        }

        // === PARCHE 2: Auto-guardado con debounce ===
        checkbox.addEventListener('change', () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                persistItem(checkbox, index);
            }, 300);
        });
    });

    // Navegación
    steps.forEach((step, index) => {
        step.addEventListener('click', () => navigateToStep(index + 1));
    });

    if (btnPrev) btnPrev.addEventListener('click', () => {
        if (currentStep > 1) navigateToStep(currentStep - 1);
    });

    if (btnNext) btnNext.addEventListener('click', () => {
        if (currentStep < totalSteps) navigateToStep(currentStep + 1);
    });

    // === Funciones ===

    function persistItem(checkbox, index) {
        localStorage.setItem(`checklist-item-${index}`, checkbox.checked);
        localStorage.setItem(`checklist-item-${index}-timestamp`, new Date().toISOString());

        const state = checkbox.checked ? 'saved' : 'pending';
        updateItemVisualState(checkbox, state);
        updateProgress();
        showSaveIndicator();
    }

    // === PARCHE 3: Diferenciación visual de estados ===
    function updateItemVisualState(checkbox, state, timestamp = null) {
        const item = checkbox.closest('.checklist-item');
        if (!item) return;

        // Remover clases previas
        item.classList.remove('state-saved', 'state-pending', 'state-unsaved');

        if (state === 'saved') {
            item.classList.add('state-saved');
            if (timestamp) {
                const time = new Date(timestamp).toLocaleTimeString('es-ES', {
                    hour: '2-digit', minute: '2-digit'
                });
                item.setAttribute('data-saved-at', time);
            }
        } else if (state === 'pending') {
            item.classList.add('state-pending');
        }
    }

    function updateProgress() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
        const percentage = Math.round((checked / total) * 100);

        if (progressBar) progressBar.style.width = `${percentage}%`;
        if (progressPercentage) progressPercentage.textContent = `${percentage}%`;

        updateStepperSteps();
    }

    // === PARCHE 4: Progreso real por paso ===
    function updateStepperSteps() {
        steps.forEach((step, index) => {
            const stepNumber = index + 1;
            const stepCheckboxes = document.querySelectorAll(`.checklist-checkbox[data-step="${stepNumber}"]`);
            const stepTotal = stepCheckboxes.length;
            const stepChecked = document.querySelectorAll(`.checklist-checkbox[data-step="${stepNumber}"]:checked`).length;
            const stepPercentage = stepTotal > 0 ? (stepChecked / stepTotal) * 100 : 0;

            step.classList.remove('completed', 'in-progress', 'not-started');

            if (stepPercentage === 100) {
                step.classList.add('completed');
                step.setAttribute('data-progress', '100%');
            } else if (stepPercentage > 0) {
                step.classList.add('in-progress');
                step.setAttribute('data-progress', `${Math.round(stepPercentage)}%`);
            } else {
                step.classList.add('not-started');
                step.setAttribute('data-progress', '0%');
            }
        });
    }

    function showSaveIndicator() {
        if (saveBadge && saveText) {
            const now = new Date().toLocaleTimeString('es-ES', {
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
            //saveText.textContent = `Guardado · ${now}`;
            saveText.textContent = `Guardado (Parche Incidencia) · ${now}`;
            saveBadge.classList.add('show');

            setTimeout(() => {
                saveBadge.classList.remove('show');
            }, 2500);
        }
    }

    function navigateToStep(stepNumber) {
        stepContents.forEach(content => content.classList.remove('active'));

        const currentStepContent = document.getElementById(`step-${stepNumber}`);
        if (currentStepContent) currentStepContent.classList.add('active');

        steps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 === stepNumber);
        });

        currentStep = stepNumber;

        if (btnPrev) btnPrev.disabled = currentStep === 1;
        if (btnNext) {
            btnNext.disabled = currentStep === totalSteps;
            btnNext.textContent = currentStep === totalSteps ? 'Finalizar ✓' : 'Siguiente →';
        }

        // Guardar paso actual
        localStorage.setItem('checklist-current-step', stepNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Inicialización
    updateProgress();

    const lastStep = localStorage.getItem('checklist-current-step');
    if (lastStep) navigateToStep(parseInt(lastStep));
}