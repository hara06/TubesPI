import React from 'react'

function Documentation() {
  return (
    <div>
        <div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row">

{/* <!-- sticky sidebar --> */}
<aside class="hidden md:w-1/3 lg:w-1/4 py-4 md:block">
    <div class="sticky top-12 flex flex-col gap-2 p-2 border rounded-xl">

        <a href="#" class="px-3 py-1 font-semibold hover:bg-indigo-50 rounded-md">
            Authentication
        </a>

        <a href="#" class="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md">
            Province
        </a>

        <a href="#" class="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md">
            Farm
        </a>

        <a href="#" class="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md">
            Livestock
        </a>

        <a href="#" class="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md">
            Product
        </a>

        <a href="#" class="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md">
            Combination
        </a>

        <a href="#" class="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md">
            Diagrams
        </a>
    </div>
</aside>



<main class="md:w-2/3 lg:w-3/4 w-full py-1 min-h-screen">
    <div class="p-2 md:p-4">
        <h1 class="font-bold text-xl md:text-2xl my-4">Farm API</h1>
        <h2 class="text-xl font-bold mb-4">Documentation</h2>

        {/* <!-- content --> */}
        <div>
            <h3 class="text-lg text-left font-semibold">Authentication</h3>
            <div class="text-left pt-5">
            <h3 class="text-lg">POST</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/regis
                    </span>
                </span>
            </span>
            </code>
                <div>               
                    <p class="text-gray-500">Register by inputting Name, Email, and Password.</p>
                    </div>
            </div>
            
            <div class="text-left pt-5">
            <h3 class="text-lg">POST</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/login
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">Enter by entering your Email and Password.</p>
                </div>
            </div>

           
            <h3 class="text-lg text-left font-semibold pt-10">Province</h3>
            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/provinsi
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get a list of provinces in Indonesia.</p>
                </div>
            </div>

            {/* Farm */}
            <h3 class="text-lg text-left font-semibold pt-10">Farm</h3>
            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/peternakan
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get a list of all farms.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/peternakan/id_peternakan
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get a list of specific farms by entering id.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/Namapeternakan
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get all farm names list.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">POST</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/peternakan
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To add farm data.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">PUT</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/peternakan/id_peternakan/edit
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To update specific farm data.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">DELETE</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/peternakan/id_peternakan/delete
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To delete specific farm data.</p>
                </div>
            </div>

            {/*Livestock */}
            <h3 class="text-lg text-left font-semibold pt-10">Livestock</h3>
            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hewan
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get all farm animals list.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hewan/id_hewan
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get a list of specific farm animals by entering id.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">POST</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hewan
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To add livestock data.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">PUT</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hewan/id_hewan/edit
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To update specific livestock data.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">DELETE</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hewan/id_hewan/delete
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To delete specific livestock data.</p>
                </div>
            </div>

            {/* Product */}
            <h3 class="text-lg text-left font-semibold pt-10">Product</h3>
            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/produk
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get all product list.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/produk/id_produk
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get a list of specific product by entering id.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">POST</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/produk
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To add product data.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">PUT</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/produk/id_produk/edit
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To update specific product data.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">DELETE</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/produk/id_produk/delete
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To delete specific product data.</p>
                </div>
            </div>

            {/* Gabungan */}
            <h3 class="text-lg text-left font-semibold pt-10">Combination</h3>
            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/pet_pro
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get data on all farms and their province.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/pet_pro/id_pro
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get data of all farms in an area based on id.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/pet_pro/nama_pro
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get data on all farms and their province based on the name of the province.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hewan&pet
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get data on all animals and their farm origin.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hewan&pet/id_hewan
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get the data of all animals and the origin of their farm based on id.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/pet/id_pet
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get data on all farms according to the id along with all the animals owned.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/produk&pet
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get data on all animals and their farm origin.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/detailsHewanProduk/id
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get Animal & Product details data from a farm.</p>
                </div>
            </div>

            {/* Diagram */}
            <h3 class="text-lg text-left font-semibold pt-10">Diagrams</h3>
            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/all_hewan_in_pro/provinsi
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get data on the number and data of all animals in each province.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hit_hewan_in_pro/provinsi
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get the number of animals in each province.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/hit_pet_in_pro/provinsi
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get the number of farms in each province.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/pet_each_pro
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get the total number of farms for each province.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">

                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/pro_in_prov/provinsi
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get total data and data on all products in each province.</p>
                </div>
            </div>

            <div class="text-left pt-5">
            <h3 class="text-lg">GET</h3>
            <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span class="flex gap-4">
                <span class="flex-1">
                    <span>
                    http://localhost:8000/api/pro_each_prov
                    </span>
                </span>
            </span>
            </code>
                <div>     
                    <p class="text-gray-500">To get the total number of products for each province.</p>
                </div>
            </div>

        </div>
    </div>
</main>
</div>

    
    </div>
  )
}

export default Documentation
