const mascaraCEP = $("#cep").keypress(function() {
    $(this).mask('00000-000');
});

// export default mascaraCEP;