<script>
  import logoDatalab from "../../assets/logos/datalab.png";
  import logoECCI from "../../assets/logos/ECCI.png";
  import logoEFI from "../../assets/logos/EFI.png";
  import logoInria from "../../assets/logos/inria.jpg";
  import logoDI from "../../assets/logos/DI.png";
  import logoSBNZ from "../../assets/logos/SBNZ.png";
  import logoVishub from "../../assets/logos/vishub.png";
</script>

<footer>
  <div class="logos-grid">
    <a href="https://vishub.net/"><img src={logoVishub} alt="VISHUB" class="logo"/></a>
    <a href="https://edinburghcentre.org/"><img src={logoECCI} alt="ECCI" class="logo"/></a>
    <a href="https://www.inria.fr/en"><img src={logoInria} alt="Inria" class="logo"/></a>
    <a href="https://efi.ed.ac.uk/"><img src={logoEFI} alt="UOE" class="logo"/></a>
    <a href="https://www.designinformatics.org/"><img src={logoDI} alt="DI" class="logo"/></a>
    <a href="https://scotland-beyond-net-zero.ac.uk"><img src={logoSBNZ} alt="SBNZ" class="logo"/></a>
    <a href="https://thedatalab.com/"><img src={logoDatalab} alt="DataLab" class="logo"/></a>
  </div>

  <div id="footer-text">
    Work funded by
    <br>
    <a href="https://scotland-beyond-net-zero.ac.uk/">Scotland Beyond Net Zero</a>
  </div>

  <div>
    <ul id="footer-list">
      <li style="margin-bottom: 10px;"><a href="https://docs.google.com/forms/d/1w-8Lt9bESZ56PdklTIT38plec7dPgDbJtORkatoXFVY/edit">Feedback</a></li>
      <li><a href="https://github.com/Edinburgh-Futures-Institute/CoBenefits">Code</a></li>
    </ul>
  </div>
</footer>


<style>
  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 2em;
    margin-right: 2em;

    font-size: 14px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .logos-grid > a {
    max-width: 10%;
  }

  .logo {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  #footer-text {
    min-width: 15%;
  }


  .logos-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2.2rem;
    justify-content: flex-start;
    align-items: center;
  }

  #footer-list {
    list-style-type: none; /* removes bullet points */
    padding: 0; /* removes left padding */
    margin: 0;  /* optional: removes default margin */
    margin-right: 0.5em;
  }

  #footer-list > li {
    color: #6C6C6C;
    text-decoration: underline;
  }

  /*#footer-list a:visited {*/
  a:visited {
    color: #6C6C6C;
  }

  a {
    color: #6C6C6C;
    text-decoration: underline;
  }
</style>