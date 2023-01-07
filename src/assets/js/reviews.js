jQuery(document).ready(function ($) {
    $("#google-reviews").googlePlaces({
        placeId: 'ChIJVciP10hFNpARL2Zs3d1vuhk'
        , render: ['reviews']
        , min_rating: 4
        , max_rows: 4
    });
});