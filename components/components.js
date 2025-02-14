export async function loadGlobalComponents() {
    // Array de componentes globales
    const globalComponents = [
        {
            containerId: 'menu-container',
            htmlPath: './components/menu/menu.html',
            cssPath: './components/menu/menu.css',
            jsPath: './components/menu/menu.js'
        },
        {
            containerId: 'footer-container',
            htmlPath: './components/footer/footer.html',
            cssPath: './components/footer/footer.css',
            jsPath: './components/footer/footer.js'
        }
    ];

    // Cargar todos los componentes globales
    await Promise.all(globalComponents.map(component => 
        loadComponent(
            component.containerId,
            component.htmlPath,
            component.cssPath,
            component.jsPath ? () => import(component.jsPath) : null
        )
    ));
}

export async function loadPageComponents(pageComponents) {
    // Cargar componentes específicos de la página
    await Promise.all(pageComponents.map(component =>
        loadComponent(
            component.containerId,
            component.htmlPath,
            component.cssPath,
            component.jsPath ? () => import(component.jsPath) : null
        )
    ));
}

// Modificar la función loadComponent existente para manejar mejor los errores
export async function loadComponent(containerId, htmlPath, cssPath, initCallback) {
    try {
        // Verificar si el contenedor existe
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container ${containerId} not found, creating it`);
            const newContainer = document.createElement('div');
            newContainer.id = containerId;
            document.body.appendChild(newContainer);
        }

        // Cargar HTML y CSS
        const [htmlResponse, cssResponse] = await Promise.all([
            fetch(htmlPath),
            fetch(cssPath)
        ]);

        const [htmlContent, cssContent] = await Promise.all([
            htmlResponse.text(),
            cssResponse.text()
        ]);

        // Insertar CSS si no existe ya
        const styleId = `style-${containerId}`;
        if (!document.getElementById(styleId)) {
            const styleElement = document.createElement('style');
            styleElement.id = styleId;
            styleElement.textContent = cssContent;
            document.head.appendChild(styleElement);
        }

        // Insertar HTML
        document.getElementById(containerId).innerHTML = htmlContent;

        // Inicializar JavaScript
        if (initCallback) {
            const module = await initCallback();
            if (module && typeof module.initialize === 'function') {
                await module.initialize();
            }
        }
    } catch (error) {
        console.error(`Error loading component ${containerId}:`, error);
    }
}