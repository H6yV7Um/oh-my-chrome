window.onload = function() {
    $(document).on('click', '.J-worktablePreview', function() {
        window.open($(this).attr('href'));
    });
};