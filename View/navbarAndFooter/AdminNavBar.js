const navbar = `


<nav class="navbar" id="navigation">
    <div class="navbar-container">

      <div class="navbar-brand">
        <a href="/homePageAdmin/admin">
          <img src="../imgs/CompanyIcon.jpeg" alt="shakey shakes"/>
        </a>
      </div>

      <ul class="navbar-left" style="position: sticky;">
        <li>
          <a href="/menu/admin">MENU</a>
        </li>


      </ul>




      <ul class="navbar-right">
        <li>
          <a href="/branchs/create">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <span style="margin-left: 5px;">Create a Branch</span>
          </a>
        </li>
        <li>
        <a href="/branchs/get">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span style="margin-left: 5px;">Find a store</span>
        </a>
      </li>
        <li> <button class="btn btn-dark"><a style="color:white;" href="/logIn/logOut">Log Out</a></button></li>

      </ul>

      <!--Main menu-->

      <button type="button" class="Main-menu" id="menu-btn">
        <svg class = "three-lines"style="width: 30px; height: 30px; margin-top: -2px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>

    </div>
  </nav>

  <!--smaller screen menu--->

  <div class="smaller-menu hidden" id="menu">
    <ul>
      <li>
        <a href="/menu/admin">MENU</a>
      </li>

      
    </ul>

    <div class="smaller-menu-bottom">
      <button class="btn btn-dark"><a style="color:white;" href="/logIn/logOut" > Log Out</a></button>
      
      <div>

        <a href="/branchs/create">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span style="margin-left: 5px;">Create a Branch</span>
        </a>

      </div>
      <div>
    
      <a href="/branchs/get">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
        <span style="margin-left: 5px;">Find a store</span>
      </a>

    </div>
    </div>
  </div>

`

document.querySelector('body').insertAdjacentHTML('afterbegin', navbar);
