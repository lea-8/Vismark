<!--
  @component
	The Atlas navbar designed for the top of the page

	@example
	```
	<Header />
	```
-->

<script>
	import { base } from '$app/paths';

	import logoMain from '../../assets/logos/logo-grid-black-beta.png';
</script>

<nav class="navbar">
	<div class="nav-left">
		<a href="{base}/" class="nav-item">
			<img src={logoMain} alt="Logo" class="logo" />
		</a>
	</div>

	<div class="nav-center">
		<div class="dropdown nav-item">
			<div class="nav-count">11</div>
			Co-Benefits
		</div>

		<div class="nav-item">
			<div class="nav-count">317</div>
			<a href="{base}/lad/#">Local Authorities</a>
		</div>

		<div class="nav-item">
			<div class="nav-count">17</div>
			<a href="{base}/sefs">Socio-Economic Factors</a>
		</div>

		<div class="nav-item">
			<div class="nav-count">46,426</div>
			<a href="{base}/map">Data Zones</a>
		</div>
	</div>

	<div class="nav-right" style="gap: 1rem;">
		<a href="{base}/" class="nav-item">Home</a>
		<a href="{base}/methods" class="nav-item">Methods</a>
		<div class="dropdown nav-item" style="margin-top: 0;">
			<a href="{base}/contact" class="nav-item">Contact</a>
		</div>
		<a href="{base}/about" class="nav-item">About</a>
	</div>
</nav>

<style>
	.navbar {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-between;
		height: 65px;
		background-color: #fff;
		z-index: 1000;
		padding-bottom: 4px;
		padding-right: 15px;
		border-bottom: 1px solid #ddd;
	}

	.nav-left,
	.nav-center,
	.nav-right {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-left {
		flex: 1;
		max-width: 250px;
	}

	.nav-center {
		flex: 2;
		justify-content: center;
	}

	.nav-right {
		flex: 1;
		justify-content: flex-end;
	}

	.logo {
		height: 60px;
		max-height: auto;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 10px;
	}

	.nav-item {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.nav-count {
		font-size: 1em;
		color: #555;
		margin-bottom: 2px;
		line-height: 1;
		text-align: center;
		width: 100%;
		font-weight: 1000;
	}

	.dropdown {
		position: relative;
		display: block;
		padding-bottom: 0;
		margin-bottom: 0;
	}

	.nav-right a,
	.nav-center a {
		display: inline-block;
		text-decoration: none;
		color: #333;
		cursor: pointer;
		font-weight: 500;
		position: relative;
		padding-bottom: 4px;
		border-bottom: 3px solid transparent;
		transition: all 0.2s ease;
	}

	.nav-center a:hover,
	.nav-right a:hover {
		color: #0077cc;
		border-bottom: 3px solid #0077cc;
	}

	.dropdown {
		position: relative;
		align-items: center;
		padding-bottom: 0;
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		.navbar {
			flex-direction: column;
			align-items: stretch;
			height: auto;
		}

		.nav-left,
		.nav-center,
		.nav-right {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
			padding: 0.5rem 0;
		}
	}
</style>
