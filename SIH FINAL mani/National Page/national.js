
// Dropdown Filter
const itemPerPage = 10
$('select').change(function () {
    pagination(itemPerPage)
});

function filter() {
    const resourcestate = $('select.state').val();
    const resourceeducation = $('select.education').val();
    const resourcecategory = $('select.category').val();
    return $('.property-load-section')
        .find('.property-item')
        .hide()
        .filter(function () {
            let okResourcestate = resourcestate === 'all' ? true : $(this).data('state') === resourcestate;
            let okResourceeducation = resourceeducation === 'all' ? true : $(this).data('education') === resourceeducation;
            let okResourcecategory = resourcecategory === 'all' ? true : $(this).data('category') === resourcecategory;
            return okResourcestate && okResourceeducation && okResourcecategory;
        })
}



// Read more



// Pagination
function pagination(itemPerPage = 8) {
    $("#pagin").html('')
    //Pagination
    let pageSize = itemPerPage;
    let currentPage = 0;

    let pageCount = filter().show().length / pageSize;

    $("#pagin").append(prevButton())

    for (let i = 0; i < pageCount; i++) {
        $("#pagin").append('<li class="page-item"><a href="#" class="page-link">' + (i + 1) + '</a></li> ');
    }

    $("#pagin").append(nextButton())

    let showPage = function (page) {
        $("#pagin li").removeClass('active');
        $("#pagin li").eq(page).addClass("active");
        currentPage = page
        if (page === 1) {
            $("#pagin li.btn-prev").addClass('disabled')
        } else {
            $("#pagin li.btn-prev").removeClass('disabled')
        }

        filter().each(function (n) {
            if (n >= pageSize * (page - 1) && n < pageSize * page) {
                $(this).show();
            }
        });
    }

    function nextButton() {
        const next = $('<li class="page-item btn-next"><span class="page-link">Next</span></li>')
        $(next).click(function () {
            if (!$(this).is('.disabled')) {
                if (currentPage < Math.ceil(pageCount)) {
                    showPage(currentPage + 1)
                }
            }
            return false;
        })
        return next;
    }

    function prevButton() {
        const prev = $('<li class="page-item btn-prev"><span class="page-link">Prev</span></li>')
        $(prev).click(function () {
            if (!$(this).is('.disabled')) {
                showPage(currentPage - 1)
            }
        })
        return prev;
    }

    showPage(1);

    $("#pagin li a").click(function () {
        $("#pagin li").removeClass("active");
        $(this).addClass("active");
        showPage(parseInt($(this).text()));
    });
}

pagination(itemPerPage)