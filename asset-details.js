// Asset Details Page Handler
document.addEventListener('DOMContentLoaded', async function() {
    // Get asset ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const assetId = urlParams.get('id') || 'equator';
    
    // Load vessel data
    await loadVessels();
    
    // Display asset details
    displayAssetDetails(assetId);
    
    // Update copyright year
    updateCopyrightYear();
});

// Display Asset Details
function displayAssetDetails(assetId) {
    const asset = vesselData[assetId];
    
    if (!asset) {
        console.error('Asset not found:', assetId);
        document.getElementById('assetTitle').textContent = 'Asset Not Found';
        return;
    }
    
    // Show map only for jetty
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
        if (assetId === 'jetty') {
            mapContainer.style.display = 'block';
        } else {
            mapContainer.style.display = 'none';
        }
    }
    
    // Update page title and meta tags
    document.title = `${asset.name} - Saibros Energy`;
    document.getElementById('pageTitle').textContent = `${asset.name} - Saibros Energy`;
    document.getElementById('pageDescription').content = asset.description;
    document.getElementById('pageKeywords').content = `${asset.name}, ${asset.type}, marine assets, offshore`;
    document.getElementById('ogTitle').content = `${asset.name} - Saibros Energy Solutions`;
    document.getElementById('ogDescription').content = asset.description;
    document.getElementById('ogImage').content = asset.image;
    document.getElementById('twitterTitle').content = `${asset.name} - Saibros Energy`;
    document.getElementById('twitterDescription').content = asset.description;
    
    // Set hero section
    document.getElementById('assetTitle').textContent = asset.name;
    document.getElementById('assetSubtitle').textContent = asset.type;
    
    // Set image
    document.getElementById('assetImage').src = asset.image;
    document.getElementById('assetImage').alt = asset.name;
    
    // Set description
    document.getElementById('assetDescription').textContent = asset.description;
    
    // Set quick info
    const quickInfoContainer = document.getElementById('assetQuickInfo');
    quickInfoContainer.innerHTML = '';
    Object.entries(asset.specs).slice(0, 3).forEach(([key, value]) => {
        const div = document.createElement('div');
        div.className = 'mb-3 pb-3 border-bottom';
        div.innerHTML = `
            <p class="mb-1 small text-muted text-uppercase" style="letter-spacing: 0.5px;">${key}</p>
            <p class="mb-0 fw-semibold" style="color: #003d5c; font-size: 1.1rem;">${value}</p>
        `;
        quickInfoContainer.appendChild(div);
    });
    
    // Set features
    const featuresContainer = document.getElementById('assetFeatures');
    featuresContainer.innerHTML = '';
    asset.features.forEach((feature) => {
        const div = document.createElement('div');
        div.className = 'p-3 bg-light rounded-3';
        div.style.borderLeft = '4px solid #006b8f';
        div.innerHTML = `
            <div class="d-flex align-items-start gap-3">
                <div class="flex-shrink-0">
                    <div class="d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; background: linear-gradient(135deg, #006b8f 0%, #06D6A0 100%); border-radius: 8px;">
                        <i class="bi bi-check2 text-white fw-bold"></i>
                    </div>
                </div>
                <span style="color: #495057; line-height: 1.6;">${feature}</span>
            </div>
        `;
        featuresContainer.appendChild(div);
    });
    
    // Set specifications — first 7 visible, rest collapsible
    const specsContainer = document.getElementById('assetSpecs');
    specsContainer.innerHTML = '';
    const specEntries = Object.entries(asset.specs);
    const visibleSpecs = specEntries.slice(0, 7);
    const extraSpecs = specEntries.slice(7);

    visibleSpecs.forEach(([key, value]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="fw-bold text-capitalize ps-3 spec-key">${key}</td>
            <td class="ps-3 spec-val">${value}</td>
        `;
        specsContainer.appendChild(tr);
    });

    if (extraSpecs.length > 0) {
        // Hidden rows
        const tbodyExtra = document.createElement('tbody');
        tbodyExtra.id = 'specsExtra';
        tbodyExtra.style.display = 'none';
        extraSpecs.forEach(([key, value]) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="fw-bold text-capitalize ps-3 spec-key">${key}</td>
                <td class="ps-3 spec-val">${value}</td>
            `;
            tbodyExtra.appendChild(tr);
        });
        specsContainer.parentElement.appendChild(tbodyExtra);

        // Toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'btn btn-outline-secondary btn-sm w-100 mt-2 specs-toggle-btn';
        toggleBtn.innerHTML = `<i class="bi bi-chevron-down me-2"></i>Show ${extraSpecs.length} more specifications`;
        toggleBtn.addEventListener('click', function() {
            const extra = document.getElementById('specsExtra');
            const isHidden = extra.style.display === 'none';
            extra.style.display = isHidden ? '' : 'none';
            toggleBtn.innerHTML = isHidden
                ? `<i class="bi bi-chevron-up me-2"></i>Show fewer specifications`
                : `<i class="bi bi-chevron-down me-2"></i>Show ${extraSpecs.length} more specifications`;
        });
        specsContainer.parentElement.after(toggleBtn);
    }
}

// Update copyright year
function updateCopyrightYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}
