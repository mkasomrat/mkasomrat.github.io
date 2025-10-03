(function() {
      var $value = document.querySelector('form [name="value"]');
      var qr = new QRious({
        element: document.getElementById('qr'),
        value: 'https://mkasomrat.xyz'
      });
      $value.addEventListener('keyup', function() {
      qr.value = $value.value;
      })
    })();