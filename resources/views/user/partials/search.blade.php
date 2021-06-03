<form method="get" action="{{route('product.create')}}" id="searchbox" class="form-inline form_search show-categories" data-search-controller-url="/pos_ecolife_marketplace/modules/possearchproducts/SearchProducts.php">
    @csrf
    <label for="pos_query_top">
        <!-- image on background -->
    </label>
    <input type="hidden" name="controller" value="search">
    <div class="pos_search form-group">
        <!-- <select class="bootstrap-select" name="poscats">
            <option value="0">All categories</option>
            <option value="12">
                Fashion
            </option>
            <option value="13">
                - - Hot Categories
            </option>
            <option value="19">
                - - - - Dresses
            </option>
            <option value="20">
                - - - - Jackets &amp; Coats
            </option>
            <option value="21">
                - - - - Sweaters
            </option>
            <option value="22">
                - - - - Jeans
            </option>
            <option value="23">
                - - - - Blouses &amp; Shirts
            </option>
            <option value="14">
                - - Outerwear &amp; Jackets
            </option>
            <option value="24">
                - - - - Basic Jackets
            </option>
            <option value="25">
                - - - - Real Fur
            </option>
            <option value="26">
                - - - - Down Coats
            </option>
            <option value="27">
                - - - - Blazers
            </option>
            <option value="28">
                - - - - Trench Coats
            </option>
            <option value="15">
                - - Weddings &amp; Events
            </option>
            <option value="29">
                - - - - Wedding Dresses
            </option>
            <option value="30">
                - - - - Evening Dresses
            </option>
            <option value="31">
                - - - - Prom Dresses
            </option>
            <option value="32">
                - - - - Bridesmaid Dresses
            </option>
            <option value="33">
                - - - - Wedding Accessories
            </option>
            <option value="16">
                - - Bottoms
            </option>
            <option value="34">
                - - - - Skirts
            </option>
            <option value="35">
                - - - - Leggings
            </option>
            <option value="36">
                - - - - Pants &amp; Capris
            </option>
            <option value="37">
                - - - - Wide Leg Pants
            </option>
            <option value="38">
                - - - - Shorts
            </option>
            <option value="17">
                - - Tops &amp; Sets
            </option>
            <option value="39">
                - - - - Tank Tops
            </option>
            <option value="40">
                - - - - Suits &amp; Sets
            </option>
            <option value="41">
                - - - - Jumpsuits
            </option>
            <option value="42">
                - - - - Rompers
            </option>
            <option value="43">
                - - - - Sleep &amp; Lounge
            </option>
            <option value="18">
                - - Accessories
            </option>
            <option value="44">
                - - - - Eyewear &amp; Accessories
            </option>
            <option value="45">
                - - - - Hats &amp; Caps
            </option>
            <option value="46">
                - - - - Belts &amp; Cummerbunds
            </option>
            <option value="47">
                - - - - Scarves &amp; Wraps
            </option>
            <option value="48">
                - - - - Gloves &amp; Mittens
            </option>
            <option value="49">
                Bags &amp; Shoes
            </option>
            <option value="50">
                - - Shoes
            </option>
            <option value="53">
                - - - - Women&#039;s Shoes
            </option>
            <option value="54">
                - - - - Men&#039;s Shoes
            </option>
            <option value="55">
                - - - - Boots
            </option>
            <option value="56">
                - - - - Casual Shoes
            </option>
            <option value="57">
                - - - - Flip Flops
            </option>
            <option value="51">
                - - Luggage &amp; Bags
            </option>
            <option value="58">
                - - - - Stylish Backpacks
            </option>
            <option value="59">
                - - - - Shoulder Bags
            </option>
            <option value="60">
                - - - - Crossbody Bags
            </option>
            <option value="61">
                - - - - Briefcases
            </option>
            <option value="62">
                - - - - Luggage &amp; Travel
            </option>
            <option value="52">
                - - Other Bags &amp; Accessories
            </option>
            <option value="63">
                - - - - Cosmetic Bags &amp; Cases
            </option>
            <option value="64">
                - - - - Wallets &amp; Card Holders
            </option>
            <option value="65">
                - - - - Luggage Covers
            </option>
            <option value="66">
                - - - - Passport Covers
            </option>
            <option value="67">
                - - - - Bag Parts &amp; Accessories
            </option>
            <option value="68">
                Electronics
            </option>
            <option value="69">
                - - Accessories &amp; Parts
            </option>
            <option value="75">
                - - - - Cables &amp; Adapters
            </option>
            <option value="76">
                - - - - Batteries
            </option>
            <option value="77">
                - - - - Chargers
            </option>
            <option value="78">
                - - - - Bags &amp; Cases
            </option>
            <option value="79">
                - - - - Electronic Cigarettes
            </option>
            <option value="70">
                - - Audio &amp; Video
            </option>
            <option value="80">
                - - - - Televisions
            </option>
            <option value="81">
                - - - - TV Receivers
            </option>
            <option value="82">
                - - - - Projectors
            </option>
            <option value="83">
                - - - - Audio Amplifier Boards
            </option>
            <option value="84">
                - - - - TV Sticks
            </option>
            <option value="71">
                - - Camera &amp; Photo
            </option>
            <option value="85">
                - - - - Digital Cameras
            </option>
            <option value="86">
                - - - - Camcorders
            </option>
            <option value="87">
                - - - - Camera Drones
            </option>
            <option value="88">
                - - - - Action Cameras
            </option>
            <option value="89">
                - - - - Photo Studio Supplies
            </option>
            <option value="72">
                - - Portable Audio &amp; Video
            </option>
            <option value="90">
                - - - - Headphones
            </option>
            <option value="91">
                - - - - Speakers
            </option>
            <option value="92">
                - - - - MP3 Players
            </option>
            <option value="93">
                - - - - VR/AR Devices
            </option>
            <option value="94">
                - - - - Microphones
            </option>
            <option value="73">
                - - Smart Electronics
            </option>
            <option value="95">
                - - - - Wearable Devices
            </option>
            <option value="96">
                - - - - Smart Home Appliances
            </option>
            <option value="97">
                - - - - Smart Remote Controls
            </option>
            <option value="98">
                - - - - Smart Watches
            </option>
            <option value="99">
                - - - - Smart Wristbands
            </option>
            <option value="74">
                - - Video Games
            </option>
            <option value="100">
                - - - - Handheld Game Players
            </option>
            <option value="101">
                - - - - Game Controllers
            </option>
            <option value="102">
                - - - - Joysticks
            </option>
            <option value="103">
                - - - - Stickers
            </option>
            <option value="104">
                Fresh Food
            </option>
            <option value="183">
                - - Fresh Fruit
            </option>
            <option value="187">
                - - - - Bananas
            </option>
            <option value="188">
                - - - - Apples &amp; Pears
            </option>
            <option value="189">
                - - - - Berries &amp; Cherries
            </option>
            <option value="190">
                - - - - Oranges &amp; Citrus Fruit
            </option>
            <option value="191">
                - - - - Grapes
            </option>
            <option value="184">
                - - Fresh Vegetables
            </option>
            <option value="192">
                - - - - Potatoes &amp; Sweet Potatoes
            </option>
            <option value="193">
                - - - - Onions &amp; Leeks
            </option>
            <option value="194">
                - - - - Carrots &amp; Root Vegetables
            </option>
            <option value="195">
                - - - - Broccoli &amp; Cauliflower
            </option>
            <option value="196">
                - - - - Cabbages &amp; Greens
            </option>
            <option value="185">
                - - Fresh Salad &amp; Dips
            </option>
            <option value="197">
                - - - - Lettuce &amp; Salad bags
            </option>
            <option value="198">
                - - - - Tomatoes
            </option>
            <option value="199">
                - - - - Cucumber
            </option>
            <option value="200">
                - - - - Celery
            </option>
            <option value="201">
                - - - - Peppers
            </option>
            <option value="186">
                - - Milk, Butter &amp; Eggs
            </option>
            <option value="202">
                - - - - Milk
            </option>
            <option value="203">
                - - - - Spreads &amp; Margarine
            </option>
            <option value="204">
                - - - - Fresh Cream &amp; Custard
            </option>
            <option value="205">
                - - - - Eggs
            </option>
            <option value="206">
                - - - - Baking &amp; Cooking
            </option>
            <option value="105">
                Jewelry &amp; Watches
            </option>
            <option value="163">
                - - Men&#039;s Watches
            </option>
            <option value="167">
                - - - - Mechanical Watches
            </option>
            <option value="168">
                - - - - Quartz Watches
            </option>
            <option value="169">
                - - - - Digital Watches
            </option>
            <option value="170">
                - - - - Sports Watches
            </option>
            <option value="164">
                - - Women&#039;s Watches
            </option>
            <option value="171">
                - - - - Women&#039;s Bracelet Watches
            </option>
            <option value="172">
                - - - - Elegant Watches
            </option>
            <option value="173">
                - - - - Romantic Watches
            </option>
            <option value="174">
                - - - - Innovative Watches
            </option>
            <option value="165">
                - - Fashion Jewelry
            </option>
            <option value="175">
                - - - - Necklaces &amp; Pendants
            </option>
            <option value="176">
                - - - - Trendy Rings
            </option>
            <option value="177">
                - - - - Trendy Earrings
            </option>
            <option value="178">
                - - - - Bracelets &amp; Bangles
            </option>
            <option value="166">
                - - Fine Jewelry
            </option>
            <option value="179">
                - - - - K-Gold Jewelry
            </option>
            <option value="180">
                - - - - Diamond Jewelry
            </option>
            <option value="181">
                - - - - Pearl Jewelry
            </option>
            <option value="182">
                - - - - Fine Earrings
            </option>
            <option value="106">
                Improvement &amp; Tools
            </option>
            <option value="107">
                Baby Toys
            </option>
            <option value="207">
                - - Preschool Toys
            </option>
            <option value="213">
                - - - - Toddler Toys
            </option>
            <option value="214">
                - - - - Preschool Building
            </option>
            <option value="215">
                - - - - Figures &amp; Animals
            </option>
            <option value="216">
                - - - - Prentend Play
            </option>
            <option value="208">
                - - Building Sets
            </option>
            <option value="217">
                - - - - Magnetic Sets
            </option>
            <option value="218">
                - - - - Meccano
            </option>
            <option value="219">
                - - - - Mega Blocks
            </option>
            <option value="220">
                - - - - Mega Construx
            </option>
            <option value="209">
                - - Games &amp; Puzzles
            </option>
            <option value="221">
                - - - - Board Games
            </option>
            <option value="222">
                - - - - Classic Games
            </option>
            <option value="223">
                - - - - Card Games
            </option>
            <option value="224">
                - - - - Electronic Games
            </option>
            <option value="210">
                - - Kid Arts &amp; Crafts
            </option>
            <option value="225">
                - - - - Clay, Dough &amp; Sand Art
            </option>
            <option value="226">
                - - - - Crafts &amp; Activities
            </option>
            <option value="227">
                - - - - Easels &amp; Storage
            </option>
            <option value="228">
                - - - - Art Tables
            </option>
            <option value="211">
                - - Baby Toddler
            </option>
            <option value="229">
                - - - - Toddler Toys
            </option>
            <option value="230">
                - - - - Bath Toys
            </option>
            <option value="231">
                - - - - Figures &amp; Animals
            </option>
            <option value="232">
                - - - - Pretend Play
            </option>
            <option value="212">
                - - Ourdoor Play
            </option>
            <option value="233">
                - - - - Sand &amp; Water Tables
            </option>
            <option value="234">
                - - - - Bubbles &amp; Sidewalk
            </option>
            <option value="235">
                - - - - Inflatable bouncers
            </option>
            <option value="236">
                - - - - Outdoor Activities
            </option>
            <option value="108">
                Outdoor Fun &amp; Sports
            </option>
            <option value="109">
                Automobiles
            </option>
            <option value="110">
                Funiture &amp; Lights
            </option>
            <option value="133">
                - - Furniture
            </option>
            <option value="139">
                - - - - Home Furniture
            </option>
            <option value="140">
                - - - - Office Furniture
            </option>
            <option value="141">
                - - - - Outdoor Furniture
            </option>
            <option value="142">
                - - - - Top Furniture Stores
            </option>
            <option value="134">
                - - Home Decor
            </option>
            <option value="143">
                - - - - Painting &amp; Calligraphy
            </option>
            <option value="144">
                - - - - Wall Stickers
            </option>
            <option value="145">
                - - - - Figurines &amp; Miniatures
            </option>
            <option value="146">
                - - - - Wall Clocks
            </option>
            <option value="135">
                - - Kitchen
            </option>
            <option value="147">
                - - - - Bakeware
            </option>
            <option value="148">
                - - - - Drinkware
            </option>
            <option value="149">
                - - - - Kitchen Tools &amp; Gadgets
            </option>
            <option value="150">
                - - - - Kitchen Knives &amp; Accessories
            </option>
            <option value="136">
                - - Household Items
            </option>
            <option value="151">
                - - - - Umbrellas
            </option>
            <option value="152">
                - - - - Bathroom Scales
            </option>
            <option value="153">
                - - - - Sweepers &amp; Mops
            </option>
            <option value="154">
                - - - - Dust Covers
            </option>
            <option value="137">
                - - Indoor Lighting
            </option>
            <option value="155">
                - - - - Ceiling Lights
            </option>
            <option value="156">
                - - - - Pendant Lights
            </option>
            <option value="157">
                - - - - Downlights
            </option>
            <option value="158">
                - - - - Wall Lamps
            </option>
            <option value="138">
                - - Outdoor Lighting
            </option>
            <option value="159">
                - - - - Flashlights
            </option>
            <option value="160">
                - - - - Solar Lamps
            </option>
            <option value="161">
                - - - - Floodlights
            </option>
            <option value="162">
                - - - - Underwater Lights
            </option>
            <option value="111">
                Beauty &amp; Health
            </option>
            <option value="113">
                - - Makeup
            </option>
            <option value="117">
                - - - - Eyes
            </option>
            <option value="118">
                - - - - Lips
            </option>
            <option value="119">
                - - - - Face
            </option>
            <option value="120">
                - - - - Makeup Tools
            </option>
            <option value="114">
                - - Skin Care
            </option>
            <option value="121">
                - - - - Face
            </option>
            <option value="122">
                - - - - Eyes
            </option>
            <option value="123">
                - - - - Body
            </option>
            <option value="124">
                - - - - Skin Care Tools
            </option>
            <option value="115">
                - - Health Care
            </option>
            <option value="125">
                - - - - Massage &amp; Relaxation
            </option>
            <option value="126">
                - - - - Household Health Monitors
            </option>
            <option value="127">
                - - - - Chinese Medicine
            </option>
            <option value="128">
                - - - - Personal Health Care Items
            </option>
            <option value="116">
                - - Nail Art &amp; Tools
            </option>
            <option value="129">
                - - - - Gel Nail Polish
            </option>
            <option value="130">
                - - - - Nail Drills
            </option>
            <option value="131">
                - - - - Nail Dryers
            </option>
            <option value="132">
                - - - - Nail Glitter
            </option>
            <option value="112">
                Houseware
            </option>
            <option value="237">
                - - Cookware
            </option>
            <option value="243">
                - - - - Cookware Sets
            </option>
            <option value="244">
                - - - - Fry Pans
            </option>
            <option value="245">
                - - - - Grill Pans
            </option>
            <option value="246">
                - - - - Cast Iron Skillets
            </option>
            <option value="238">
                - - Appliances
            </option>
            <option value="247">
                - - - - Toasters
            </option>
            <option value="248">
                - - - - Blenders &amp; Juicers
            </option>
            <option value="249">
                - - - - Stand Mixers
            </option>
            <option value="250">
                - - - - Slow Cookers
            </option>
            <option value="239">
                - - Kitchenware
            </option>
            <option value="251">
                - - - - Chopping Boards
            </option>
            <option value="252">
                - - - - Aprons
            </option>
            <option value="253">
                - - - - Basters
            </option>
            <option value="254">
                - - - - BBQ Tools
            </option>
            <option value="240">
                - - Tableware
            </option>
            <option value="255">
                - - - - Dinner Sets
            </option>
            <option value="256">
                - - - - Plates &amp; Bowls
            </option>
            <option value="257">
                - - - - Bowls
            </option>
            <option value="258">
                - - - - Cutlery
            </option>
            <option value="241">
                - - Knives
            </option>
            <option value="259">
                - - - - Knife Blocks
            </option>
            <option value="260">
                - - - - Knife Sets
            </option>
            <option value="261">
                - - - - Butcher Knives
            </option>
            <option value="262">
                - - - - Carving Knives
            </option>
            <option value="242">
                - - Coffee/Tea
            </option>
            <option value="263">
                - - - - Coffee Makers
            </option>
            <option value="264">
                - - - - Sugar Bowls
            </option>
            <option value="265">
                - - - - Tea Pots &amp; Infusers
            </option>
            <option value="266">
                - - - - Stove Top Kettles
            </option>
        </select> -->

    </div>
    <input type="text" name="q" value="{{ request()->q ?? '' }}" placeholder="Entrez votre clé de recherche ... " id="pos_query_top" class="search_query form-control ac_input">
    <button type="submit" class="btn btn-danger search_submit">
        <i class="ion-ios-search-strong"></i>
    </button>
</form>