
    <template>
  <div class="nav-bar dark">
    <div class="nav-bar-wrap">
      <div class="nav-content">
        <div class="row">
          <div class="col col-auto toggle-button-col">
            <div id="toggle-menu" class="toggle-sidebar">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
          <div class="col title-col">
            <form id="page-search" class="search">
              <div class="input-container">
                <span class="search-icon icofont icofont-search"></span>
                <input
                  placeholder="Type page title to search"
                  class="search-input"
                />
              </div>
            </form>
            <h1 id="page-title" class="page-title">Dashboard</h1>
          </div>
          <div class="col col-auto actions-col">
            <div class="nav-actions">
              <div class="item toggle-search-btn">
                <a
                  class="nav-link d-none d-md-block"
                  id="toggle-search"
                  href="#"
                  ><i class="icon icofont icofont-search"></i
                ></a>
              </div>
              <div class="item">
                <a class="nav-link" data-toggle="dropdown" href="#"
                  ><i class="icon icofont icofont-user"></i
                ></a>
                <div
                  class="dropdown-menu dropdown-menu-right mini-menu profile"
                >
                  <div class="avatar-block">
                    <img
                      alt="user-avatar"
                      src="../../assets/avatarPlaceholder.png"
                    />
                    <span class="name">Anna Hamens</span>
                  </div>
                  <ul class="menu-list">
                    <li>
                      <a href="#" class="profile-link"
                        ><i class="icofont icofont-id-card"></i> Profile</a
                      >
                    </li>
                    <li>
                      <a href="#" class="profile-link"
                        ><i class="icofont icofont-calendar"></i> Inbox</a
                      >
                    </li>
                    <li>
                      <a href="#" class="profile-link"
                        ><i class="icofont icofont-calendar"></i> Calendar</a
                      >
                    </li>
                    <li>
                      <a href="#" class="profile-link"
                        ><i class="icofont icofont-settings"></i> Settings</a
                      >
                    </li>
                    <li>
                      <a href="#" class="profile-link"
                        ><i class="icofont icofont-sign-out"></i> Log Out</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="items-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
