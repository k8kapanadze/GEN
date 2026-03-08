<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Education Network | ოქსფორდის წარმომადგენლობა</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        /* ძირითადი სტილები */
        :root {
            --navy: #002147;
            --white: #ffffff;
            --light-gray: #f4f7f9;
            --accent: #0056b3;
            --text: #333;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            color: var(--text);
            line-height: 1.6;
            background-color: var(--white);
        }

        /* Header */
        header {
            background: var(--navy);
            color: white;
            padding: 1rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: 1px;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 25px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 0.9rem;
            transition: 0.3s;
        }

        nav ul li a:hover {
            color: #bdc3c7;
        }

        .cart-icon {
            position: relative;
            cursor: pointer;
            font-size: 1.2rem;
        }

        #cart-count {
            background: red;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 0.7rem;
            position: absolute;
            top: -10px;
            right: -10px;
        }

        /* Hero Section */
        .hero {
            height: 80vh;
            background: linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), 
                        url('https://images.unsplash.com/photo-1523050853063-915894612264?auto=format&fit=crop&q=80') center/cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            padding: 0 20px;
            margin-top: 60px;
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            max-width: 800px;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .btn-main {
            background: var(--white);
            color: var(--navy);
            padding: 12px 30px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            transition: 0.3s;
        }

        .btn-main:hover {
            background: #e0e0e0;
        }

        /* About Us */
        .section {
            padding: 80px 10%;
            text-align: center;
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-top: 40px;
            text-align: left;
        }

        .card {
            background: var(--light-gray);
            padding: 30px;
            border-left: 5px solid var(--navy);
        }

        /* Services */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .service-card {
            border: 1px solid #ddd;
            padding: 25px;
            border-radius: 8px;
            transition: 0.3s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .service-card:hover {
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .service-card h3 {
            color: var(--navy);
            margin-bottom: 15px;
        }

        .add-to-cart {
            margin-top: 20px;
            background: var(--navy);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 4px;
        }

        /* Registration Form */
        .registration {
            background: var(--light-gray);
        }

        form {
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
            background: white;
            padding: 40px;
            border-radius: 8px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        input, textarea {
            width: 100%;
            padding: 12px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        /* Footer */
        footer {
            background: var(--navy);
            color: white;
            padding: 50px 10%;
            text-align: center;
        }

        .social-icons {
            margin: 20px 0;
        }

        .social-icons i {
            font-size: 1.5rem;
            margin: 0 15px;
            cursor: pointer;
        }

        /* Responsiveness */
        @media (max-width: 768px) {
            nav { display: none; }
            .about-grid { grid-template-columns: 1fr; }
            .hero h1 { font-size: 1.8rem; }
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">GLOBAL EDUCATION NETWORK</div>
        <nav>
            <ul>
                <li><a href="#about">ჩვენ შესახებ</a></li>
                <li><a href="#services">ბანაკები</a></li>
                <li><a href="#services">კონფერენციები</a></li>
                <li><a href="#services">კურსები</a></li>
                <li><a href="#registration">კონსულტაცია</a></li>
            </ul>
        </nav>
        <div class="cart-icon" onclick="scrollToRegistration()">
            <i class="fas fa-briefcase"></i>
            <span id="cart-count">0</span>
        </div>
    </header>

    <section class="hero">
        <h1>ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში</h1>
        <p>განათლება, კულტურული გაცვლა და პროფესიული ზრდა მსოფლიოს წამყვან პლატფორმებზე.</p>
        <a href="#about" class="btn-main">გაიგე მეტი</a>
    </section>

    <section id="about" class="section">
        <h2>ჩვენ შესახებ</h2>
        <p style="max-width: 800px; margin: 20px auto;">გლობალური განათლების ქსელი არის პლატფორმა, რომელიც აკავშირებს ცოდნას, ინოვაციასა და პროფესიონალებს მთელი მსოფლიოს მასშტაბით.</p>
        <div class="about-grid">
            <div class="card">
                <h3>მისია</h3>
                <p>ინოვაციური საგანმანათლებლო მოდელების დანერგვა და ხელმისაწვდომი, მაღალი ხარისხის ცოდნის გავრცელება.</p>
            </div>
            <div class="card">
                <h3>ხედვა</h3>
                <p>გავხდეთ წამყვანი გლობალური ჰაბი, რომელიც განსაზღვრავს მომავლის განათლების სტანდარტებს.</p>
            </div>
        </div>
    </section>

    <section id="services" class="section">
        <h2>სერვისები და მიმართულებები</h2>
        <div class="services-grid">
            <div class="service-card">
                <h3>🌍 საერთაშორისო ბანაკები</h3>
                <p>კულტურული გაცვლა, ლიდერობის განვითარება და კოლაბორაციული სწავლება საზღვარგარეთ.</p>
                <button class="add-to-cart" onclick="addToSelection('საერთაშორისო ბანაკები')">დაამატე არჩეულებში</button>
            </div>
            <div class="service-card">
                <h3>🎓 საერთაშორისო კონფერენციები</h3>
                <p>მონაწილეობა ავტორიტეტულ ფორუმებსა და აკადემიურ ღონისძიებებში მსოფლიოს მასშტაბით.</p>
                <button class="add-to-cart" onclick="addToSelection('საერთაშორისო კონფერენციები')">დაამატე არჩეულებში</button>
            </div>
            <div class="service-card">
                <h3>🧠 ტრენინგები და ვორქშოფები</h3>
                <p>კრიტიკული აზროვნება, პრობლემის გადაჭრა და პროფესიული კომპეტენციების ამაღლება.</p>
                <button class="add-to-cart" onclick="addToSelection('ტრენინგები')">დაამატე არჩეულებში</button>
            </div>
            <div class="service-card">
                <h3>🗣️ ენის კურსები</h3>
                <p>სწავლება საერთაშორისო სტანდარტებით Native Speaker-ების მონაწილეობით.</p>
                <button class="add-to-cart" onclick="addToSelection('ენის კურსები')">დაამატე არჩეულებში</button>
            </div>
        </div>
    </section>

    <section id="registration" class="section registration">
        <h2>ჩემი შერჩეული სერვისები</h2>
        <p>გადახედეთ თქვენს მიერ მონიშნულ პროგრამებს და გამოგვიგზავნეთ მოთხოვნა.</p>
        
        <form id="requestForm">
            <div class="form-group">
                <label>არჩეული პროგრამები:</label>
                <textarea id="selected-services-list" readonly rows="3" placeholder="ჯერ არაფერია არჩეული..."></textarea>
            </div>
            <div class="form-group">
                <label>სახელი და გვარი</label>
                <input type="text" required>
            </div>
            <div class="form-group">
                <label>საკონტაქტო ნომერი</label>
                <input type="tel" required>
            </div>
            <div class="form-group">
                <label>ელ-ფოსტა</label>
                <input type="email" required>
            </div>
            <div class="form-group">
                <label>დამატებითი კომენტარი</label>
                <textarea rows="4"></textarea>
            </div>
            <button type="submit" class="btn-main" style="background: var(--navy); color: white; width: 100%; border: none; cursor: pointer;">მოთხოვნის გაგზავნა</button>
        </form>
    </section>

    <footer>
        <p>დატოვეთ საკონტაქტო ინფორმაცია და ჩვენი წარმომადგენელი თავად დაგიკავშირდებათ.</p>
        <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
        </div>
        <p>Email: globaleducationnetwork.gen.1@gmail.com</p>
        <p style="margin-top: 20px; font-size: 0.8rem; opacity: 0.6;">&copy; 2024 Global Education Network. All rights reserved.</p>
    </footer>

    <script>
        let selectedServices = [];

        function addToSelection(serviceName) {
            if(!selectedServices.includes(serviceName)) {
                selectedServices.push(serviceName);
                updateUI();
            } else {
                alert("ეს სერვისი უკვე დამატებულია.");
            }
        }

        function updateUI() {
            document.getElementById('cart-count').innerText = selectedServices.length;
            document.getElementById('selected-services-list').value = selectedServices.join(', ');
        }

        function scrollToRegistration() {
            document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
        }

        document.getElementById('requestForm').onsubmit = function(e) {
            e.preventDefault();
            alert("გმადლობთ! თქვენი მოთხოვნა გაგზავნილია. ჩვენი წარმომადგენელი მალე დაგიკავშირდებათ.");
            this.reset();
            selectedServices = [];
            updateUI();
        }
    </script>
</body>
</html>
