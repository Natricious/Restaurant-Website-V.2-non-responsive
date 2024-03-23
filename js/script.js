jQuery(document).ready(function() {
    jQuery('.chefs_s3_images').each(function(e) {
        const self = jQuery(this);
        const img = self.attr('data-img');

        self.html(`
            <img src="${img}" alt="">
            <div class="chefs_social d-flex sp-btw align-center">
                <a href="https://instagram.com" target="_blank">
                    <span class="mdi mdi-instagram chefs_socialLogos ig"></span>
                </a>
                <a href="https://facebook.com" target="_blank">
                    <span class="mdi mdi-facebook chefs_socialLogos fb"></span>
                </a>
                <a href="https://twitter.com" target="_blank">
                    <span class="mdi mdi-twitter chefs_socialLogos tw"></span>
                </a>
                <a href="https://pinterest.com" target="_blank">
                    <span class="mdi mdi-pinterest chefs_socialLogos pin"></span>
                </a>
            </div>
        `);
    });
});