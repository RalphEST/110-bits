
document.querySelectorAll("iframe").forEach(function (el){
    el.height = el.offsetWidth*(735/1809);
})

jQuery(document).ready(function($) {
    $(".click-row").click(function() {
        window.location = $(this).attr("data-href");
    });


});

let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIqO6x-oBYIDJuaIs3X9SclHO8qb3wFG3BT3s4b8QfAd1EwJOe9eO0ezVEjm6f6FvTzWB9K-rS25w_/pub?gid=0&single=true&output=csv"
d3.csv(url, function(row) {
    row['On YT'] = row['On YT']=="0"? false : true;
    return row
})
    .then(function (data) {
        console.log(data);

        data.forEach(function (datum){
            if (datum['On YT']) {
                d3.select('#content-' + datum['Week Number']).append('div')
                    .html(`
                 <div class="row justify-content-center">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6 aspect-ratio">
                                    <iframe width="100%" height="290" src="${datum["YT Embed Link Source"]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="col-6">
                                    <h5 class="card-title">${datum['Video Title']}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${datum["Video subtitle"]}</h6>
                                    <p class="card-text">${datum['Description']}</p>
                                    <a href="${datum["Link (YT /Canvas folder)"]}" class="card-link" target="_blank">Link to video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            } else {
                d3.select('#content-' + datum['Week Number']).append('div')
                    .html(`
                <div class="row justify-content-center">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${datum['Video Title']}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${datum["Video subtitle"]}</h6>
                            <p class="card-text">${datum['Description']}</p>
                            <a href="${datum["Link (YT /Canvas folder)"]}" class="card-link" target="_blank">Link to video</a>
                        </div>
                    </div>
                </div>
                
                `)
            }
        })
    })
