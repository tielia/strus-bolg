
export const Tabbar = () => {
    return (
      <div class="fixed bottom-0 sm:bottom-5 sm:shadow-lg sm:shadow-gray-500/30 hover:shadow-md left-0 duration-300 overflow-hidden border-t sm:border z-50 w-full h-16 bg-white sm:max-w-md sm:rounded-xl inset-x-0 mx-auto border-gray-200">
	        <div class="grid h-full grid-cols-5 mx-auto font-medium">
            {siteConfig.navItems.map((item) => (
              <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group gap-1 hover:text-orange-500 text-gray-500">
              <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z">
                </path>
              </svg>
              <span class="text-xs">Home</span>
            </button>

            ))}




		


		{/* <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group gap-1 hover:text-orange-500 text-gray-500">
			<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
				</path>
			</svg>
			<span class="text-xs">Search</span>
		</button>
		<button type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group gap-1 hover:text-orange-500 text-gray-500">
			<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z">
				</path>
			</svg>
			<span class="text-xs">Likes</span>
		</button>
		<button type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group gap-1 hover:text-orange-500 text-gray-500">
			<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z">
				</path>
			</svg>
			<span class="text-xs">Notifications</span>
		</button>
		<button type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group gap-1 hover:text-orange-500 text-gray-500">
			<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z">
				</path>
			</svg>
			<span class="text-xs">Profile</span>
		</button> */}
	</div>
</div>
        
    
    );
};
