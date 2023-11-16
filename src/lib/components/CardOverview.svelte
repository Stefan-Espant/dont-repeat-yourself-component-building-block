<script>
    export let data
</script>

<section>
	<nav>
		<!-- Weergave van layout voor wensen -->
		<div class="layout-view">
			<button>
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
			</button>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
					><rect width="4" height="4" fill="" rx="2" /><rect
						width="4"
						height="4"
						x="10"
						fill=""
						rx="2"
					/><rect width="4" height="4" x="20" fill="" rx="2" /><rect
						width="4"
						height="4"
						y="10"
						fill=""
						rx="2"
					/><rect width="4" height="4" x="10" y="10" fill="" rx="2" /><rect
						width="4"
						height="4"
						x="20"
						y="10"
						fill=""
						rx="2"
					/><rect width="4" height="4" y="20" fill="" rx="2" /><rect
						width="4"
						height="4"
						x="10"
						y="20"
						fill=""
						rx="2"
					/><rect width="4" height="4" x="20" y="20" fill="" rx="2" /></svg>
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
	<article>
        <ul>
        {#if data && data.wishes}
            {#each data.wishes as wish}
                <li>
                    <h3>{wish.heading}</h3>
                </li>
            {/each}
        {:else}
            <p>Geen wensen beschikbaar</p>
        {/if}
        </ul>
    </article>
</section>

<style>
	/* Header */
	section {
		padding: var(--unit-default);
	}

    article, nav {
		background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
    }

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
        margin-bottom: var(--unit-default);
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

    nav .layout-view button:hover {
        background-color: var(--color-blue);
    }

    nav .layout-view button:hover svg {
        fill: var(--color-secundary);
    }

	nav div:nth-child(2) {
		gap: var(--unit-small);
		align-items: center;
	}
</style>
