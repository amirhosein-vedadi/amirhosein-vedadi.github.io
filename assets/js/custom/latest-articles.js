document.addEventListener('DOMContentLoaded', function() {
    // Find the latest articles container
    const container = document.querySelector('[data-latest-articles]');
    if (!container) return;

    // Determine if we're running locally or on a server
    const isLocalFile = window.location.protocol === 'file:';
    
    // If running locally, just embed the content directly
    if (isLocalFile) {
        container.innerHTML = `
            <div class="m-0">
                <h4 class="fs-3 text-gray-800 mb-7">Latest Articles & Tutorials</h4>
                <!--begin::Item-->
                <div class="d-flex flex-stack mb-7">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-60px symbol-2by3 me-4">
                        <div class="symbol-label" style="background-image: url('../posts/media/isaac_gym_setup.jpg')"></div>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="m-0">
                        <a href="../posts/isaac_gym_setup.html" class="text-gray-900 fw-bold text-hover-primary fs-6">Setting Up Isaac Gym and Legged Gym for Robot Training</a>
                        <span class="text-gray-600 fw-semibold d-block pt-1 fs-7">Feb 14 2025</span>
                        <span class="badge badge-light-primary fw-bold my-2">TUTORIAL</span>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Item-->
                <!--begin::Item-->
                <div class="d-flex flex-stack mb-7">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-60px symbol-2by3 me-4">
                        <div class="symbol-label" style="background-image: url('../posts/media/legged_rl.jpg')"></div>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="m-0">
                        <a href="../posts/rl_legged_robots.html" class="text-gray-900 fw-bold text-hover-primary fs-6">Deep Reinforcement Learning for Legged Robots</a>
                        <span class="text-gray-600 fw-semibold d-block pt-1 fs-7">Feb 9 2025</span>
                        <span class="badge badge-light-primary fw-bold my-2">TECHNICAL</span>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Item-->
                <!--begin::Item-->
                <div class="d-flex flex-stack mb-7">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-60px symbol-2by3 me-4">
                        <div class="symbol-label" style="background-image: url('../posts/media/mpc_control.jpg')"></div>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="m-0">
                        <a href="../posts/mpc_control.html" class="text-gray-900 fw-bold text-hover-primary fs-6">Model Predictive Control for Dynamic Legged Locomotion</a>
                        <span class="text-gray-600 fw-semibold d-block pt-1 fs-7">Jan 20 2025</span>
                        <span class="badge badge-light-primary fw-bold my-2">TECHNICAL</span>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Item-->
            </div>
        `;
        return;
    }

    // For production server, use fetch
    const articlesPath = '/posts/latest_articles.html';
    const baseUrl = window.location.origin;
    fetch(baseUrl + articlesPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading latest articles:', error);
            container.innerHTML = '<p class="text-muted">Failed to load latest articles</p>';
        });
});
