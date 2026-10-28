/**
 * Módulo IHC-A-04 v2: Advertencia Perceptible de Alérgenos
 * Parches aplicados:
 *   - Accesibilidad mejorada (focus trap, ARIA)
 *   - Confirmación explícita con checkbox
 *   - Retorno al carrito sin perder pedido
 * Responsable: Sebastián (@SebasIsd)
 * Versión: 2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    initAllergenModuleV2();
});

function initAllergenModuleV2() {
    // Elementos del DOM
    const btnAddToCart = document.getElementById('btn-add-to-cart');
    const btnConfirmOrder = document.getElementById('btn-confirm-order');
    const allergenModal = document.getElementById('allergen-modal');
    const btnAcceptAllergen = document.getElementById('btn-accept-allergen');
    const btnReturnAllergen = document.getElementById('btn-return-allergen');
    const modalClose = document.querySelector('.modal-close');
    const cartSection = document.getElementById('cart-section');
    const confirmCheckbox = document.getElementById('confirm-allergen-check');

    // Estado
    let allergenAcknowledged = false;
    let cartItems = [];
    let previousFocus = null;

    const currentProduct = {
        id: 'cafe-americano',
        name: 'Café Americano',
        price: 1.50,
        hasAllergens: true,
        allergens: ['Cafeína']
    };

    // Event Listeners
    if (btnAddToCart) btnAddToCart.addEventListener('click', handleAddToCart);
    if (btnAcceptAllergen) btnAcceptAllergen.addEventListener('click', handleAcceptAllergen);
    if (btnReturnAllergen) btnReturnAllergen.addEventListener('click', handleReturnAllergen);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (btnConfirmOrder) btnConfirmOrder.addEventListener('click', handleConfirmOrder);

    // Cerrar modal al hacer clic fuera
    if (allergenModal) {
        allergenModal.addEventListener('click', (e) => {
            if (e.target === allergenModal) closeModal();
        });
    }

    // === PARCHE 1: Focus Trap para accesibilidad ===
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && allergenModal && allergenModal.style.display === 'flex') {
            closeModal();
        }

        // Focus trap dentro del modal
        if (e.key === 'Tab' && allergenModal && allergenModal.style.display === 'flex') {
            const focusable = allergenModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    function handleAddToCart(e) {
        if (currentProduct.hasAllergens && !allergenAcknowledged) {
            e.preventDefault();
            openModal();
        } else {
            addToCart();
        }
    }

    function handleAcceptAllergen() {
        // === PARCHE 2: Confirmación explícita con checkbox ===
        if (confirmCheckbox && !confirmCheckbox.checked) {
            confirmCheckbox.focus();
            confirmCheckbox.parentElement.style.animation = 'shake 0.4s ease';
            setTimeout(() => {
                confirmCheckbox.parentElement.style.animation = '';
            }, 400);
            return;
        }

        allergenAcknowledged = true;
        addToCart();
        closeModal();
    }

    function handleReturnAllergen() {
        // === PARCHE 3: Retorno al carrito SIN perder el pedido ===
        closeModal();
        if (cartSection && cartItems.length > 0) {
            cartSection.classList.remove('hidden');
            cartSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleConfirmOrder(e) {
        if (cartItems.length === 0) {
            e.preventDefault();
            alert('Tu carrito está vacío.');
            return;
        }

        const hasUnacknowledgedAllergens = cartItems.some(item =>
            item.hasAllergens && !item.allergenAcknowledged
        );

        if (hasUnacknowledgedAllergens) {
            e.preventDefault();
            alert('⚠️ Tienes productos con alérgenos sin confirmar. Revisa las advertencias.');
            return;
        }

        confirmOrder();
    }

    function openModal() {
        if (allergenModal) {
            previousFocus = document.activeElement;
            allergenModal.style.display = 'flex';
            allergenModal.setAttribute('aria-hidden', 'false');

            // Reset checkbox al abrir
            if (confirmCheckbox) confirmCheckbox.checked = false;

            // Focus en el primer elemento interactivo
            setTimeout(() => {
                const firstBtn = allergenModal.querySelector('button');
                if (firstBtn) firstBtn.focus();
            }, 100);
            console.log('✅ INCIDENCIA A-04 APLICADA EN VIVO: ' + new Date().toLocaleTimeString());
        }
    }

    function closeModal() {
        if (allergenModal) {
            allergenModal.style.display = 'none';
            allergenModal.setAttribute('aria-hidden', 'true');

            // Restaurar foco
            if (previousFocus) previousFocus.focus();
        }
    }

    function addToCart() {
        cartItems.push({
            ...currentProduct,
            allergenAcknowledged: allergenAcknowledged
        });

        updateCartUI();
        showCartSection();
    }

    function updateCartUI() {
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        if (btnConfirmOrder) {
            btnConfirmOrder.textContent = `Confirmar pedido - $${total.toFixed(2)}`;
        }
    }

    function showCartSection() {
        if (cartSection) {
            cartSection.classList.remove('hidden');
            cartSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function confirmOrder() {
        const orderId = `#CU-${Math.floor(Math.random() * 1000)}`;
        alert(`✅ Pedido confirmado\n\nNúmero: ${orderId}\nTotal: $${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`);

        cartItems = [];
        allergenAcknowledged = false;
        updateCartUI();
        if (cartSection) cartSection.classList.add('hidden');
    }
}