/**
 * Módulo IHC-A-04: Advertencia Perceptible de Alérgenos
 * Responsable: Sebastián (@SebasIsd)
 * Versión: 1.0
 */

document.addEventListener('DOMContentLoaded', () => {
    initAllergenModule();
});

function initAllergenModule() {
    // Elementos del DOM
    const btnAddToCart = document.getElementById('btn-add-to-cart');
    const btnConfirmOrder = document.getElementById('btn-confirm-order');
    const allergenModal = document.getElementById('allergen-modal');
    const btnAcceptAllergen = document.getElementById('btn-accept-allergen');
    const btnReturnAllergen = document.getElementById('btn-return-allergen');
    const modalClose = document.querySelector('.modal-close');
    const cartSection = document.getElementById('cart-section');
    
    // Estado de la aplicación
    let allergenAcknowledged = false;
    let cartItems = [];
    
    // Producto con alérgenos (simulación)
    const currentProduct = {
        id: 'cafe-americano',
        name: 'Café Americano',
        price: 1.50,
        hasAllergens: true,
        allergens: ['Cafeína']
    };

    // Event Listeners
    if (btnAddToCart) {
        btnAddToCart.addEventListener('click', handleAddToCart);
    }
    
    if (btnAcceptAllergen) {
        btnAcceptAllergen.addEventListener('click', handleAcceptAllergen);
    }
    
    if (btnReturnAllergen) {
        btnReturnAllergen.addEventListener('click', handleReturnAllergen);
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (btnConfirmOrder) {
        btnConfirmOrder.addEventListener('click', handleConfirmOrder);
    }
    
    // Cerrar modal al hacer clic fuera
    if (allergenModal) {
        allergenModal.addEventListener('click', (e) => {
            if (e.target === allergenModal) {
                closeModal();
            }
        });
    }

    // Funciones
    function handleAddToCart(e) {
        if (currentProduct.hasAllergens && !allergenAcknowledged) {
            e.preventDefault();
            openModal();
        } else {
            addToCart();
        }
    }
    
    function handleAcceptAllergen() {
        allergenAcknowledged = true;
        addToCart();
        closeModal();
    }
    
    function handleReturnAllergen() {
        closeModal();
        // No añade al carrito, solo cierra el modal
        console.log('Usuario decidió no añadir el producto con alérgenos');
    }
    
    function handleConfirmOrder(e) {
        if (cartItems.length === 0) {
            e.preventDefault();
            alert('Tu carrito está vacío. Añade productos antes de confirmar.');
            return;
        }
        
        // Verificar si hay productos con alérgenos no reconocidos
        const hasUnacknowledgedAllergens = cartItems.some(item => 
            item.hasAllergens && !item.allergenAcknowledged
        );
        
        if (hasUnacknowledgedAllergens) {
            e.preventDefault();
            alert('⚠️ Tienes productos con alérgenos en tu pedido. Por favor, revisa las advertencias antes de confirmar.');
            return;
        }
        
        // Confirmar pedido
        confirmOrder();
    }
    
    function openModal() {
        if (allergenModal) {
            allergenModal.style.display = 'flex';
            allergenModal.setAttribute('aria-hidden', 'false');
            // Focus en el primer botón para accesibilidad
            setTimeout(() => {
                btnAcceptAllergen.focus();
            }, 100);
        }
    }
    
    function closeModal() {
        if (allergenModal) {
            allergenModal.style.display = 'none';
            allergenModal.setAttribute('aria-hidden', 'true');
        }
    }
    
    function addToCart() {
        cartItems.push({
            ...currentProduct,
            allergenAcknowledged: allergenAcknowledged
        });
        
        updateCartUI();
        showCartSection();
        
        console.log('Producto añadido al carrito:', cartItems);
    }
    
    function updateCartUI() {
        // Actualizar UI del carrito
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        
        // Actualizar botón de confirmación
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
        // Simular confirmación de pedido
        const orderId = `#CU-${Math.floor(Math.random() * 1000)}`;
        
        alert(`✅ Pedido confirmado exitosamente\n\nNúmero de pedido: ${orderId}\nTotal: $${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}\n\nRetira tu pedido en caja mostrando este número.`);
        
        // Limpiar carrito
        cartItems = [];
        allergenAcknowledged = false;
        updateCartUI();
        
        if (cartSection) {
            cartSection.classList.add('hidden');
        }
    }
    
    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && allergenModal.style.display === 'flex') {
            closeModal();
        }
    });
}