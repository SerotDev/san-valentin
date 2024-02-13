$('#downloadPDF').click(function () {
    domtoimage.toPng(document.getElementById('to-img-pdf'))
        .then(function (blob) {
            var pdf = new jsPDF('l', 'pt', [$('#to-img-pdf').width(), $('#to-img-pdf').height()]);

            pdf.addImage(blob, 'PNG', 0, 0, $('#to-img-pdf').width(), $('#to-img-pdf').height());
            pdf.save("tarjeta-rasca.pdf");

            that.options.api.optionsChanged();
        });
});