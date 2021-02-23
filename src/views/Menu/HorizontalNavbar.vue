
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
                <span class="search-icon">
                  <font-awesome-icon icon="search" />
                </span>
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
                >
                  <font-awesome-icon icon="search" />
                </a>
              </div>

              <div class="item">
                <a
                  class="nav-link"
                  data-toggle="dropdown"
                  href="#"
                  aria-expanded="false"
                >
                  <font-awesome-icon icon="bell" />
                  <span class="marker blue"></span>
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right"
                  x-placement="bottom-end"
                  style="
                    position: absolute;
                    transform: translate3d(-190px, 44px, 0px);
                    top: 0px;
                    left: 0px;
                    will-change: transform;
                  "
                >
                  <div class="menu-header">
                    <h4 class="menu-title">Notifications</h4>
                  </div>
                  <ul class="list menu-list">
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="thumbs-up" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc"
                            >Sara Crouch liked your photo
                          </span>
                          <span class="date">10 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="user-plus" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">New user registered</span>
                          <span class="date">23 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="share-alt" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">Amanda Lie shared your post</span>
                          <span class="date">25 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="icon">
                        <font-awesome-icon icon="envelope" />
                      </div>
                      <a href="#">
                        <div class="content">
                          <span class="desc">You have new message</span>
                          <span class="date">58 minutes ago</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div class="menu-footer">
                    <a href="#">View all notifications</a>
                  </div>
                </div>
              </div>

              <div class="item">
                <a class="nav-link" data-toggle="dropdown" href="#">
                  <font-awesome-icon icon="user" />
                </a>
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
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="id-card" />
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="inbox" />
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="calendar-alt" />
                        Calendar
                      </a>
                    </li>
                    <li>
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="sliders-h" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" class="profile-link">
                        <font-awesome-icon icon="sign-out-alt" />
                        Log Out
                      </a>
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
