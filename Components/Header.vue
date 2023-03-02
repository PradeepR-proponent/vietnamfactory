<script lang="ts" setup></script>

<template>
 <header class="header">
        <div class="top-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3">
                        <a class="navbar-brand" href="#"><img src="../assets/img/logos/logo.svg" class="img-fluid logo" alt=""></a>
                    </div>
                    <div class="col-lg-5">
                        <form class="d-flex" role="search">
                            <select name="" id="" class="form-select">
                                <option value="">Product</option>
                                <option value="">Buy Lead</option>
                            </select>
                            <input class="form-control" type="search" placeholder="what you are looking for" aria-label="Search">
                            <button class="search-btn" type="submit"><i class="fa fa-search"></i> <span>Search</span></button>
                          </form>
                    </div>
                    <div class="col-lg-4">
                        <ul class="top-list">
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-flag-usa"></i>
                                    <p class="text">ENGLISH</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <p class="text">SELL</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-circle-info"></i>
                                    <p class="text">HELP</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-regular fa-envelope-open"></i>
                                    <p class="text">MESSAGE</p>
                                </a>
                            </li>
                            <li>
                                <button class="sign-in top">
                                    <i class="fa-solid fa-user-plus"></i>
                                    <p class="text">SIGN IN</p>
                                </button>

                                <div id="sign-form" class="form">
                                    <button type="button" class="sign-in btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <form class="contact-form">
                                        <div class="field-wrapper">
                                            <label>E-mail Address</label>
                                            <input type="email" class="text-field-input">
                                        </div>
                                        <div class="field-wrapper">
                                            <label>Password</label>
                                            <input type="password" class="text-field-input">
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                        </div>
                                        <div class="mb-3 form-check">
                                            <a href="">Forget your password?</a>
                                        </div>
                                        <div class="btn-wraper mb-3">
                                          <button type="submit" class="btn-primary"> LOG IN</button>
                                        </div>
                                        <div class="not-sign">
                                            <p>Not Signed up Yet?</p>
                                            <a href="">SIGN UP</a>
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="hamburger">
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            </a>
                            <ul class="dropdown-menu">
                              <li><a href="" class="dropdown-item">Medical Supplies</a></li>
                              <li><a href="" class="dropdown-item">Food & Agriculture</a></li>
                              <li><a href="" class="dropdown-item">Industrial Products</a></li>
                              <li><a href="" class="dropdown-item">Fashion Accessories</a></li>
                              <li><a href="" class="dropdown-item">Cosmetic & Personal Care</a></li>
                              <li><a href="" class="dropdown-item">Furniture & Home Appliance</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="">All</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Buyers Leads</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Consultant Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">About Us</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav social-nav ms-auto">
                        <li class="list-item">
                            <a class="nav-link" href="">Tell Us Your Requirement</a>
                        </li>
                        <li class="list-item">
                            <ul class="social-handle">
                                <li class="nav-item">Follow us on</li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa-brands fa-instagram"></i></a></li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa-brands fa-twitter"></i></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>

header {
  position: relative;
  width: 100%;
  z-index: 999;
}
header .top-header {
  background-color: #fff;
  padding: 16px 0;
  height: 80px;
}
header .top-header .navbar-brand {
  display: flex;
  justify-content: center;
}
header .top-header .navbar-brand .logo {
  width: 180px;
}
header .top-header form {
  height: 48px;
}
header .top-header form .form-select {
  width: 35%;
  background-color: #eee;
  border: 1px solid #edb114;
  border-radius: 3px 0 0 3px;
  border-right: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #000;
}
header .top-header form .form-select:focus {
  box-shadow: none;
  border-color: 0;
}
header .top-header form .form-control {
  border-radius: 0;
  border: 1px solid #edb114;
  border-left: 0;
}
header .top-header form .form-control:focus {
  box-shadow: none;
}
header .top-header form .form-control::-moz-placeholder {
  font-size: 17px;
  font-weight: 600;
  color: #000;
}
header .top-header form .form-control::placeholder {
  font-size: 17px;
  font-weight: 600;
  color: #000;
}
header .top-header form .search-btn {
  background-color: #edb114;
  color: #000;
  border: 1px solid #edb114;
  border-radius: 0 3px 3px 0;
  padding: 0 18px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
}
header .top-header form .search-btn span {
  margin: 0;
  color: #000;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 600;
}
header .top-header .top-list {
  display: flex;
  justify-content: center;
}
header .top-header .top-list li {
  padding: 0 18px;
  position: relative;
  text-align: center;
}
header .top-header .top-list li .text {
  font-size: 14px;
  font-weight: 700;
  color: #000;
  margin: 0;
}
header .top-header .top-list li a {
  text-decoration: none;
}
header .top-header .top-list li a i {
  font-size: 22px;
  transition: 0.5s ease-in-out;
  padding: 0;
}
header .top-header .top-list li a:hover i {
  color: #000;
}
header .top-header .top-list li .sign-in.top {
  border: none;
  background: none;
}
header .top-header .top-list li .btn-close {
  float: right;
  margin-bottom: 10px;
  padding: 0 12px;
}
header .top-header .top-list li .btn-close:focus {
  box-shadow: none;
}
header .top-header .top-list li #sign-form {
  display: none;
  position: absolute;
  z-index: 99;
  height: 360px;
  width: 300px;
  right: 0;
  top: 60px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.07) 15px -10px 12px 17px;
  padding: 10px;
  border-radius: 10px;
}
header .top-header .top-list li #sign-form::before {
  content: "";
  height: 28px;
  width: 28px;
  background-color: #fff;
  position: absolute;
  z-index: -1;
  top: -7px;
  right: 30px;
  transform: rotate(45deg);
}
header .top-header .top-list li #sign-form .contact-form .field-wrapper label {
  background-color: #efefef;
}
header .top-header .top-list li #sign-form .contact-form .field-wrapper .text-field-input {
  background-color: #efefef;
}
header .top-header .top-list li #sign-form form .form-check {
  text-align: left;
}
header .top-header .top-list li #sign-form form .form-check .form-check-input {
  cursor: pointer;
  border-radius: 3px;
}
header .top-header .top-list li #sign-form form .form-check .form-check-input:checked {
  background-color: #edb114;
  border-color: #edb114;
}
header .top-header .top-list li #sign-form form .form-check .form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 215, 158, 0.44);
}
header .top-header .top-list li #sign-form form .form-check .form-check-label {
  cursor: pointer;
}
header .top-header .top-list li #sign-form form .form-check a {
  color: #484848;
  transition: ease-in-out 0.3s;
}
header .top-header .top-list li #sign-form form .form-check a:hover {
  color: #edb114;
}
header .top-header .top-list li #sign-form form .btn-wraper .btn-primary {
  width: 85%;
  padding: 10px;
}
header .top-header .top-list li #sign-form form .not-sign {
  text-align: center;
}
header .top-header .top-list li #sign-form form .not-sign p {
  margin-bottom: 0;
}
header .top-header .top-list li #sign-form form .not-sign a {
  color: #000;
  transition: ease-in-out 0.4s;
}
header .top-header .top-list li #sign-form form .not-sign a:hover {
  color: #edb114;
}
header .navbar {
  background: #000;
  padding: 0;
}
header .navbar .navbar-toggler {
  border: none;
}
header .navbar .navbar-toggler:focus {
  box-shadow: none;
}
header .navbar .navbar-toggler .hamburger .bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background-color: #ffffff;
}
header .navbar .hamburger.active .bar:nth-child(2) {
  opacity: 0;
}
header .navbar .hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
header .navbar .hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
header .navbar .logo {
  max-width: 180px;
}
header .navbar .navbar-nav {
  align-items: center;
}
header .navbar .navbar-nav .nav-item {
  margin: 0;
  font-size: 15px;
}
header .navbar .navbar-nav .nav-item .nav-link {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  transition: 0.5s ease-in-out;
  text-transform: uppercase;
  padding: 0 12px;
}
header .navbar .navbar-nav .nav-item .nav-link:hover {
  color: #edb114;
}
header .navbar .navbar-nav .nav-item .dropdown-toggle::after {
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: url("../assets/img/icons/menu.svg");
  border: 0;
  position: relative;
  top: 5px;
  filter: invert(87%) sepia(40%) saturate(2939%) hue-rotate(342deg) brightness(95%) contrast(109%);
}
header .navbar .navbar-nav .nav-item .dropdown-toggle.show::after {
  transform: rotate(180deg);
}
header .navbar .navbar-nav .nav-item .dropdown-menu {
  background: #eeeeee;
  border: none;
  border-radius: 0;
  position: absolute;
  top: 40px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 12px 3px;
}
header .navbar .navbar-nav .nav-item .dropdown-menu::before {
  content: "";
  height: 28px;
  width: 28px;
  background-color: #eeeeee;
  position: absolute;
  z-index: -1;
  top: -7px;
  left: 5px;
  transform: rotate(45deg);
}
header .navbar .navbar-nav .nav-item .dropdown-menu li {
  border-bottom: 1px solid #e3e3e3;
  position: relative;
}
header .navbar .navbar-nav .nav-item .dropdown-menu li:nth-child(6) {
  border-bottom: none;
}
header .navbar .navbar-nav .nav-item .dropdown-menu li::after {
  content: url(../assets/img/icons/angle.svg);
  border: 0;
  position: absolute;
  top: 5px;
  right: 8px;
  transform: rotate(360deg);
}
header .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-item {
  color: #000;
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  padding-right: 30px;
  transition: 0.5s ease-in-out;
}
header .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-item:hover {
  color: #edb114;
  background: none;
}
header .navbar .navbar-nav .nav-item .btn-wrapper {
  margin: 0;
}
header .navbar .social-nav .list-item {
  margin: 0;
}
header .navbar .social-nav .list-item:nth-child(1) {
  margin: 0;
  position: relative;
  z-index: 9;
  padding: 0 10px;
  display: flex;
  justify-content: center;
}
header .navbar .social-nav .list-item:nth-child(1)::before {
  content: "";
  background-color: #edb114;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
}
header .navbar .social-nav .list-item a {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  transition: 0.5s ease-in-out;
  text-transform: uppercase;
  color: #000;
  text-align: center;
}
header .navbar .social-nav .social-handle {
  display: flex;
  align-items: center;
}
header .navbar .social-nav .social-handle .nav-item:nth-child(1) {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  transition: 0.5s ease-in-out;
  text-transform: uppercase;
  margin: 0 14px;
}
header .navbar .social-nav .social-handle .nav-item .nav-link {
  padding: 0;
  font-size: 16px;
}
header .navbar .social-nav .social-handle .nav-item .nav-link i {
  color: #fff;
  transition: 0.5s ease-in-out;
}
header .navbar .social-nav .social-handle .nav-item .nav-link i:hover {
  color: #edb114;
}

.sticky {
  position: fixed;
  width: 100%;
  background-color: #f3f5f8;
  box-shadow: 3px 2px 2px rgba(57, 63, 72, 0.15);
  transition: 0.3s all ease-in-out;
}
.sticky .navbar {
  background-color: #edb114;
}
.sticky .navbar .logo {
  background-color: #edb114;
  padding: 12px 18px;
  border-radius: 1rem 0;
}
.sticky .navbar .nav-item .nav-link:hover,
.sticky .navbar .nav-item .dropdown-menu:hover {
  color: #000 !important;
}
.sticky .navbar .nav-item .dropdown-toggle::after {
  filter: invert(1) !important;
}
.sticky .navbar .social-nav .list-item:nth-child(1)::before {
  background-color: #fff;
}




</style>
