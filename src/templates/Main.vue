<template>
  <b-container fluid>
    <b-row id="row-main">
      <b-col xl="2" lg="2" md="2" sm="3" cols="1" id="col-sidebar">
        <div id="sidebar-header">
          <img src="@/assets/reternal.png" id="sidebar-header-image">
        </div>
        <div id="sidebar-content">
          <hr>
          <div class="sidebar-category">
            
          </div>
          <b-nav vertical id="sidebar-nav" class="sidebar-nav-links">
            <ul class="nav flex-column">
              <b-nav-item class="nav-item" to="home">
                <span class="nav-item-icon"><font-awesome-icon icon="home" /></span>
                <span class="nav-item-title">Home</span>
              </b-nav-item>
              <b-nav-item class="nav-item" to="pager">
                <span class="nav-item-icon"><font-awesome-icon icon="home" /></span>
                <span class="nav-item-title">Home</span>
              </b-nav-item> 
            </ul>
          </b-nav>
          <hr>
        </div>
      </b-col>

      <b-col id="col-main">
        <b-row id="row-navbar">
          <b-col cols="12">

          <b-navbar toggleable="md" type="light" variant="platinum" >
            <b-navbar-nav>
              <b-nav-item href="#"> <font-awesome-icon icon="terminal" /> Terminal</b-nav-item>
              <b-nav-item-dropdown right>
                <template slot="button-content">
                <font-awesome-icon icon="eye" />  Views
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <template slot="button-content">
                <font-awesome-icon icon="bullseye" />  Beacons
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <template slot="button-content">
                <font-awesome-icon icon="cog" />  Settings
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

          </b-navbar>

          </b-col>
        </b-row>

        <b-row id="row-content">
          <b-col cols="12">
            <router-view>
            </router-view>
          </b-col>
        </b-row>

        <b-row id="row-footer">
          <b-col cols="12">
            <b-row>
              <b-col class="text-right">Created by: Joey Dreijer</b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default{
  name: 'app'
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Open+Sans')
@import "@/assets/style.sass"

#app
  font-family: 'Open Sans', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale


#row-main
  min-height: 100vh

#col-sidebar
  border-right-style: solid
  border-right-width: 1px
  border-right-color: #bbbbbb

  #sidebar-header-image
    width: 100%


  #sidebar-content
    .sidebar-category
      margin-left: 20px

    .nav-item-title
      margin-left: 20px
    a
      text-transform: uppercase
      color: #333741
      font-weight: 400
      font-size: 15px
      &:hover
        .nav-item-icon
          color: #ff7f51
 

#row-content
  background-color: #eeeeee
  min-height: 100vh

#row-navbar
  border-bottom: 1px
  border-bottom-color: #bbbbbb
  border-bottom-style: solid
  background-color: #eeeeee
  color: #e8e5e1

.navbar-nav
  .nav-item
    text-transform: uppercase
    font-size: 13px
    font-weight: 400

.col-main
  width: 100%

.footer
  height: 50px


</style>
