getRepos = () => {
    fetch(
      "https://api.github.com/users/blackdevil98/repos?sort=created:asc&client_id=090501696c0523ca9cf2&client_secret=8b01dd66330e8cf7be4dacaff3b8f10ef5c6b08d"
    )
      .then(res => res.json())
      .then(data => {
        let output = "";
        let len = 0;
        data.forEach(function(repo) {
          icon = () => {
            return len % 3 === 0 ? "icon fa-file-code-o " : "icon fa-code";
          };
          output += `
          <div class="col-md-4">
          <div class="blog-entry ftco-animate">
                  <div class="text text-2 pt-2 mt-3">
              <h3 class="mb-4">${repo.name}</h3>
              <p class="mb-4">${repo.description}</p>
              
              <div class="meta-wrap align-items-center">
                  <div>
                      <p><a href="${repo.html_url}" target="_blank" class="btn py-2">Show this repo..<span class="ion-ios-arrow-forward"></span></a></p>
                  </div>
              </div>
              </div>
          </div>
      </div>
                  `;
          len++;
        });
  
        document.getElementById("output").innerHTML = output;
      })
      .catch(err => console.log(err));
  };
  getRepos();

  