function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle("Agenda Google Apps Script");
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}


function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById("1284YhLRgpS3Cvovn88zum4_t5C47LevWiep6vR3RpcU").getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
    
}