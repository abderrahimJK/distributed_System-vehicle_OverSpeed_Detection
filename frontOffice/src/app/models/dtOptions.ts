export const dtOptions = {
  pagingType: 'full_numbers',
  pageLength: 10,
  processing: true,
  dom: 'Bfrtip',
  buttons: [
       
    {
      extend: 'print',
      text: 'PRINT',
      className: 'btn btn-outline-primary',
      exportOptions: {
        columns: ':not(:last-child)'
      }
    },
    {
      extend: 'pdf',
      title: "#tableTitle",
      text: '<i class="fas fa-file-pdf text-danger"></i><span style="margin-left: 7px;">PDF</span>',
      className: 'btn btn-outline-primary',
      customize: function (doc) {
        doc.content[1].table.widths = Array(
          doc.content[1].table.body[0].length + 1
        )
          .join('*')
          .split('');
      },
      exportOptions: {
        columns: ':not(:last-child)'
      }
    }
  ]
};
