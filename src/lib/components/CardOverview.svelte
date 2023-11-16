<script>
    import { onMount } from 'svelte';

    onMount(() => {
        document.documentElement.classList.add("javascriptEnabled");

        const listSwitch = document.querySelector('#listSwitch');
        const gridSwitch = document.querySelector('#gridSwitch');
        const customView = document.querySelector('#custom-view');

        const layoutView = document.querySelector('.layout-view')

        listSwitch.addEventListener('click', () => {
            customView.classList.remove('grid-overview');
            customView.classList.add('list-overview');
        });

        gridSwitch.addEventListener('click', () => {
            customView.classList.remove('list-overview');
            customView.classList.add('grid-overview');
        });

    });

    export let data
    console.log('Data:', data);
</script>

<section>
	<nav>
		<!-- Weergave van layout voor wensen -->
		<div class="layout-view">
			<button id="listSwitch">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="none"
					><rect width="24" height="4" x="8" fill="" rx="2" /><rect
						width="6"
						height="4"
						fill=""
						rx="2"
					/><rect width="24" height="4" x="8" y="10" fill="" rx="2" /><rect
						width="6"
						height="4"
						y="10"
						fill=""
						rx="2"
					/><rect width="24" height="4" x="8" y="20" fill="" rx="2" /><rect
						width="6"
						height="4"
						y="20"
						fill=""
						rx="2"
					/></svg>
                    <span>Schakel over op lijstweergave</span>
			</button>
			<button id="gridSwitch">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="" fill-rule="evenodd" d="M3.429 0H8.57A3.429 3.429 0 0 1 12 3.429V8.57A3.429 3.429 0 0 1 8.571 12H3.43A3.429 3.429 0 0 1 0 8.571V3.43A3.429 3.429 0 0 1 3.429 0Zm0 2.571a.857.857 0 0 0-.858.858V8.57c0 .474.384.858.858.858H8.57a.857.857 0 0 0 .858-.858V3.43a.857.857 0 0 0-.858-.858H3.43ZM17.429 0h5.142A3.429 3.429 0 0 1 26 3.429V8.57A3.429 3.429 0 0 1 22.571 12H17.43A3.429 3.429 0 0 1 14 8.571V3.43A3.429 3.429 0 0 1 17.429 0Zm0 2.571a.857.857 0 0 0-.858.858V8.57c0 .474.384.858.858.858h5.142a.857.857 0 0 0 .858-.858V3.43a.857.857 0 0 0-.858-.858H17.43ZM3.429 14H8.57A3.429 3.429 0 0 1 12 17.429v5.142A3.429 3.429 0 0 1 8.571 26H3.43A3.429 3.429 0 0 1 0 22.571V17.43A3.429 3.429 0 0 1 3.429 14Zm0 2.571a.857.857 0 0 0-.858.858v5.142c0 .474.384.858.858.858H8.57a.857.857 0 0 0 .858-.858V17.43a.857.857 0 0 0-.858-.858H3.43ZM17.429 14h5.142A3.429 3.429 0 0 1 26 17.429v5.142A3.429 3.429 0 0 1 22.571 26H17.43A3.429 3.429 0 0 1 14 22.571V17.43A3.429 3.429 0 0 1 17.429 14Zm0 2.571a.857.857 0 0 0-.858.858v5.142c0 .474.384.858.858.858h5.142a.857.857 0 0 0 .858-.858V17.43a.857.857 0 0 0-.858-.858H17.43Z" clip-rule="evenodd"/></svg>
                    <span hidden>Schakel over op rasterweergave</span>
			</button>
		</div>

        <!-- Schakelaar tussen lichte en donkere modus -->
		<!-- <div>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
				><circle cx="12" cy="12" r="6.667" fill="#495057" /><path
					fill="#495057"
					d="m12 0 2.31 4H9.69L12 0ZM20.19 3.219 18.994 7.68l-3.266-3.266L20.19 3.22ZM24 12l-4 2.31V9.69L24 12ZM20.19 20.19l-4.462-1.196 3.266-3.266 1.196 4.461ZM12 24l-2.31-4h4.62L12 24ZM3.22 20.19l1.195-4.462 3.266 3.266-4.462 1.195ZM0 12l4-2.31v4.62L0 12ZM3.219 3.219 7.68 4.414 4.414 7.68 3.22 3.22Z"
				/></svg
			>
			<form>
				<input name="LightDarkToggle" type="checkbox" />
				<label id="LightDarkToggle" for="LightDarkToggle" hidden>
					Schakel tussen licht en donker</label
				>
			</form>
			<svg
				width="25"
				height="25"
				viewBox="0 0 25 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6.6074 19.2812C13.607 19.2812 19.2812 13.607 19.2812 6.6074C19.2812 4.55994 18.7957 2.62588 17.9336 0.914062C22.0739 2.99936 24.9141 7.2881 24.9141 12.2402C24.9141 19.2398 19.2398 24.9141 12.2402 24.9141C7.2881 24.9141 2.99936 22.0739 0.914062 17.9336C2.62588 18.7957 4.55994 19.2812 6.6074 19.2812Z"
					fill="#495057"
				/>
			</svg>
		</div> -->
	</nav>
	<article id="custom-view" class="grid-overview">
        {#if data && data.wishes && data.wishes.length > 0}
            <ul>
                {#each data.wishes as wish}
                    <li>
                        <img src={wish.image.url} alt="Afbeelding van {wish.heading}" />
                        <a href="/contact">
                            <h3>{wish.heading}</h3>
                        </a>
                    </li>
                {/each}
            </ul>
        {:else}
            <p>Geen wensen gevonden.</p>
        {/if}
    </article>
</section>

<style>
	/* Header */
	section {
        max-width: 700px;
        margin: 0 auto;
		padding: var(--unit-default);
	}

    img {
        width: clamp(10rem, 100%, 12rem);   
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: var(--unit-micro);
    }

    li {
		background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
    }

	nav {
		display: none;
		flex-direction: row;
		justify-content: space-between;
        margin-bottom: var(--unit-default);
        background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
	}

	nav div {
		display: flex;
		flex-direction: row;
		gap: var(--unit-small);
	}

    

    /* Layout button instellingen */
    nav .layout-view button {
        padding: var(--unit-small);
        transition: var(--animation-default) ease-in-out;
        border-radius: var(--unit-micro);
    }

    nav .layout-view button svg {
        fill: var( --color-primary-50);
    }

    nav .layout-view button:is(:hover, :focus) {
        background-color: var(--color-blue);
    }

    nav .layout-view button:is(:hover, :focus) svg {
        fill: var(--color-secundary);
    }

    nav .layout-view button:active {
        background-color: var(--color-accent-100);
    }

    nav .layout-view button span {
        opacity: 0;
        width: 0px;
        height: 0;
        overflow: hidden;
        display: block;
    }

	nav div:nth-child(2) {
		gap: var(--unit-small);
		align-items: center;
	}

    /* Inhoud met wensen in lijstweergave */
    .list-overview ul li {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: var(--unit-large);
        padding: var(--unit-small);
        margin-bottom: var(--unit-default);
        border-bottom: 2px solid var(--color-accent-75);
    }

    .list-overview ul li img {
        width: clamp(8rem, 100%, 10rem);
    }

    .list-overview ul li:last-child {
        border-bottom: unset;
    }

    /* Inhoud met wensen in rasterweergave */
    .grid-overview ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--unit-default);
    }

    .grid-overview ul li {
        padding: var(--unit-default);
        background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
    }

    .grid-overview ul li img {
        margin-bottom: var(--unit-small);
    }

    ul li a h3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        transition: var(--animation-default) ease-in-out;
    }

    ul li a:is(:hover, :focus) h3 {
        color: var(--color-blue);
    }

    #custom-view {
        transition: var(--animation-default) ease-in-out;
    }

    @media (min-width: 440px) {
        .grid-overview ul {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 500px) {
        .list-overview ul li {
            grid-template-columns: 12rem 1fr;
        }   
    }

    @media (min-width: 628px) {
        .grid-overview ul {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    /* Zichtbaarheids instelling */
    .javascriptEnabled section nav{
        display: flex;
    }
</style>
