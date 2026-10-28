/**
 * Módulo IHC-A-08: Persistencia de Datos en Checklist
 * Responsable: Sebastián (@SebasIsd)
 * Versión: 1.0
 */

document.addEventListener('DOMContentLoaded', () => {
    initChecklistModule();
});

function initChecklistModule() {
    // Elementos del DOM
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const progressBar = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const saveBadge = document.getElementById('save-badge');
    const steps = document.querySelectorAll('.stepper-step');
    const stepContents = document.querySelectorAll('.step-content');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    // Estado
    let currentStep = 1;
    const totalSteps = 6;

    // Cargar estado guardado desde localStorage
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`checklist-item-${index}`);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
        
        // Event listener para cada checkbox
        checkbox.addEventListener('change', () => {
            // Guardar en localStorage
            localStorage.setItem(`checklist-item-${index}`, checkbox.checked);
            
            // Actualizar UI
            updateProgress();
            showSaveIndicator();
            
            // Guardar timestamp del último guardado
            localStorage.setItem('checklist-last-saved', new Date().toISOString());
        });
    });

    // Navegación entre pasos
    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            navigateToStep(index + 1);
        });
    });

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (currentStep > 1) {
                navigateToStep(currentStep - 1);
            }
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                navigateToStep(currentStep + 1);
            }
        });
    }

    // Funciones
    function updateProgress() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
        const percentage = Math.round((checked / total) * 100);
        
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
        
        if (progressPercentage) {
            progressPercentage.textContent = `${percentage}%`;
        }
        
        // Actualizar estado de los pasos del stepper
        updateStepperSteps(percentage);
    }

    function updateStepperSteps(percentage) {
        steps.forEach((step, index) => {
            const stepNumber = index + 1;
            const stepCheckboxes = document.querySelectorAll(`.checklist-checkbox[data-step="${stepNumber}"]`);
            const stepTotal = stepCheckboxes.length;
            const stepChecked = document.querySelectorAll(`.checklist-checkbox[data-step="${stepNumber}"]:checked`).length;
            const stepPercentage = (stepChecked / stepTotal) * 100;
            
            if (stepPercentage === 100) {
                step.classList.add('completed');
            } else if (stepPercentage > 0) {
                step.classList.add('in-progress');
                step.classList.remove('completed');
            } else {
                step.classList.remove('completed', 'in-progress');
            }
        });
    }

    function showSaveIndicator() {
        if (saveBadge) {
            saveBadge.classList.add('show');
            setTimeout(() => {
                saveBadge.classList.remove('show');
            }, 2000);
        }
    }

    function navigateToStep(stepNumber) {
        // Ocultar todos los pasos
        stepContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Mostrar el paso actual
        const currentStepContent = document.getElementById(`step-${stepNumber}`);
        if (currentStepContent) {
            currentStepContent.classList.add('active');
        }
        
        // Actualizar stepper visual
        steps.forEach((step, index) => {
            if (index + 1 === stepNumber) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Actualizar estado
        currentStep = stepNumber;
        
        // Actualizar botones de navegación
        if (btnPrev) {
            btnPrev.disabled = currentStep === 1;
        }
        
        if (btnNext) {
            btnNext.disabled = currentStep === totalSteps;
            btnNext.textContent = currentStep === totalSteps ? 'Finalizar' : 'Siguiente →';
        }
        
        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Inicializar progreso
    updateProgress();
    
    // Restaurar último paso visitado
    const lastStep = localStorage.getItem('checklist-current-step');
    if (lastStep) {
        navigateToStep(parseInt(lastStep));
    }
    
    // Guardar paso actual al navegar
    const originalNavigateToStep = navigateToStep;
    navigateToStep = function(stepNumber) {
        localStorage.setItem('checklist-current-step', stepNumber);
        originalNavigateToStep(stepNumber);
    };
}