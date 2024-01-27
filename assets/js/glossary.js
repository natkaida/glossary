document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.glossary-index li a.glossary-menu').forEach(function(link) {

    link.addEventListener('click', function(event) {
        document.querySelectorAll('.glossary-index li a.glossary-menu').forEach(a => {
  a.style.backgroundColor = '';
});

      let item = this.dataset.name;
       this.style.backgroundColor = '#6082B6';

      if (item == 'all') {
        document.querySelectorAll('.glossary-items').forEach(item => {
          item.style.display = 'block';
        });
      } else {

        document.querySelectorAll('.glossary-items').forEach(item => {
          item.style.display = 'none'; 
        });
        
        document.querySelector(`#glossary-${item}`).style.display = 'block';

      }

    });

  });

  document.querySelector('#glossary-search').addEventListener('keyup', function() {

    let filter = this.value.toLowerCase();
    
    document.querySelectorAll('.glossary-list .glossary-items').forEach(item => {
      item.style.display = 'none';
    });
    
    document.querySelectorAll('.glossary-list li').forEach(item => {
      item.style.display = 'none';
    });

    let flag = false;

    document.querySelectorAll('.glossary-list li').forEach(function(item) {
      if (item.textContent.toLowerCase().includes(filter)) {
        flag = true;
        item.style.display = 'block';
        item.closest('.glossary-items').style.display = 'block';
      }
    });

    let alert = document.querySelector('.glossary-alert');
    
    if (!flag) {
      alert.style.display = 'block';
      alert.innerHTML = `По запросу "${filter}" ничего не найдено :(`; 
    } else {
      alert.style.display = 'none';
    }

  });

});


document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.glossary-alert').style.display = 'none';
});