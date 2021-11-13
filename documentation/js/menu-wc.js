'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">youtube-session documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c2e59d1b52f4018bfef83b73afdb3a8f"' : 'data-target="#xs-controllers-links-module-AppModule-c2e59d1b52f4018bfef83b73afdb3a8f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c2e59d1b52f4018bfef83b73afdb3a8f"' :
                                            'id="xs-controllers-links-module-AppModule-c2e59d1b52f4018bfef83b73afdb3a8f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c2e59d1b52f4018bfef83b73afdb3a8f"' : 'data-target="#xs-injectables-links-module-AppModule-c2e59d1b52f4018bfef83b73afdb3a8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c2e59d1b52f4018bfef83b73afdb3a8f"' :
                                        'id="xs-injectables-links-module-AppModule-c2e59d1b52f4018bfef83b73afdb3a8f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-b410b8d6ed73b9fd6e937e4884228a85"' : 'data-target="#xs-controllers-links-module-AuthModule-b410b8d6ed73b9fd6e937e4884228a85"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b410b8d6ed73b9fd6e937e4884228a85"' :
                                            'id="xs-controllers-links-module-AuthModule-b410b8d6ed73b9fd6e937e4884228a85"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-b410b8d6ed73b9fd6e937e4884228a85"' : 'data-target="#xs-injectables-links-module-AuthModule-b410b8d6ed73b9fd6e937e4884228a85"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b410b8d6ed73b9fd6e937e4884228a85"' :
                                        'id="xs-injectables-links-module-AuthModule-b410b8d6ed73b9fd6e937e4884228a85"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionSerializer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionSerializer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DishModule.html" data-type="entity-link" >DishModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DishModule-9bc3886cf775fa30b9ebb59e172c4548"' : 'data-target="#xs-controllers-links-module-DishModule-9bc3886cf775fa30b9ebb59e172c4548"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DishModule-9bc3886cf775fa30b9ebb59e172c4548"' :
                                            'id="xs-controllers-links-module-DishModule-9bc3886cf775fa30b9ebb59e172c4548"' }>
                                            <li class="link">
                                                <a href="controllers/DishController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DishController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DishModule-9bc3886cf775fa30b9ebb59e172c4548"' : 'data-target="#xs-injectables-links-module-DishModule-9bc3886cf775fa30b9ebb59e172c4548"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DishModule-9bc3886cf775fa30b9ebb59e172c4548"' :
                                        'id="xs-injectables-links-module-DishModule-9bc3886cf775fa30b9ebb59e172c4548"' }>
                                        <li class="link">
                                            <a href="injectables/DishService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DishService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExpenseModule.html" data-type="entity-link" >ExpenseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ExpenseModule-7f691aa18e920ca1b182a1bd0e977e36"' : 'data-target="#xs-controllers-links-module-ExpenseModule-7f691aa18e920ca1b182a1bd0e977e36"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExpenseModule-7f691aa18e920ca1b182a1bd0e977e36"' :
                                            'id="xs-controllers-links-module-ExpenseModule-7f691aa18e920ca1b182a1bd0e977e36"' }>
                                            <li class="link">
                                                <a href="controllers/ExpenseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpenseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ExpenseModule-7f691aa18e920ca1b182a1bd0e977e36"' : 'data-target="#xs-injectables-links-module-ExpenseModule-7f691aa18e920ca1b182a1bd0e977e36"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExpenseModule-7f691aa18e920ca1b182a1bd0e977e36"' :
                                        'id="xs-injectables-links-module-ExpenseModule-7f691aa18e920ca1b182a1bd0e977e36"' }>
                                        <li class="link">
                                            <a href="injectables/ExpenseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpenseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryModule.html" data-type="entity-link" >InventoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-InventoryModule-384c5b533fffe914661f99a4cb3bc72b"' : 'data-target="#xs-controllers-links-module-InventoryModule-384c5b533fffe914661f99a4cb3bc72b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InventoryModule-384c5b533fffe914661f99a4cb3bc72b"' :
                                            'id="xs-controllers-links-module-InventoryModule-384c5b533fffe914661f99a4cb3bc72b"' }>
                                            <li class="link">
                                                <a href="controllers/InventoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InventoryModule-384c5b533fffe914661f99a4cb3bc72b"' : 'data-target="#xs-injectables-links-module-InventoryModule-384c5b533fffe914661f99a4cb3bc72b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InventoryModule-384c5b533fffe914661f99a4cb3bc72b"' :
                                        'id="xs-injectables-links-module-InventoryModule-384c5b533fffe914661f99a4cb3bc72b"' }>
                                        <li class="link">
                                            <a href="injectables/InventoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-24b2c88f670b9eda6a299bc511a2232f"' : 'data-target="#xs-controllers-links-module-OrderModule-24b2c88f670b9eda6a299bc511a2232f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-24b2c88f670b9eda6a299bc511a2232f"' :
                                            'id="xs-controllers-links-module-OrderModule-24b2c88f670b9eda6a299bc511a2232f"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-24b2c88f670b9eda6a299bc511a2232f"' : 'data-target="#xs-injectables-links-module-OrderModule-24b2c88f670b9eda6a299bc511a2232f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-24b2c88f670b9eda6a299bc511a2232f"' :
                                        'id="xs-injectables-links-module-OrderModule-24b2c88f670b9eda6a299bc511a2232f"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-b37bd3240faf5726e62e9fdacb1cf15b"' : 'data-target="#xs-injectables-links-module-UsersModule-b37bd3240faf5726e62e9fdacb1cf15b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-b37bd3240faf5726e62e9fdacb1cf15b"' :
                                        'id="xs-injectables-links-module-UsersModule-b37bd3240faf5726e62e9fdacb1cf15b"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DishController.html" data-type="entity-link" >DishController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ExpenseController.html" data-type="entity-link" >ExpenseController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InventoryController.html" data-type="entity-link" >InventoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CheckOutDTO.html" data-type="entity-link" >CheckOutDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dish.html" data-type="entity-link" >Dish</a>
                            </li>
                            <li class="link">
                                <a href="classes/DishDTO.html" data-type="entity-link" >DishDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DishRepository.html" data-type="entity-link" >DishRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Expense.html" data-type="entity-link" >Expense</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExpenseDTO.html" data-type="entity-link" >ExpenseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExpenseRepository.html" data-type="entity-link" >ExpenseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExpenseType.html" data-type="entity-link" >ExpenseType</a>
                            </li>
                            <li class="link">
                                <a href="classes/Helper.html" data-type="entity-link" >Helper</a>
                            </li>
                            <li class="link">
                                <a href="classes/Inventory.html" data-type="entity-link" >Inventory</a>
                            </li>
                            <li class="link">
                                <a href="classes/InventoryDTO.html" data-type="entity-link" >InventoryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/InventoryRepository.html" data-type="entity-link" >InventoryRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderDetails.html" data-type="entity-link" >OrderDetails</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderDTO.html" data-type="entity-link" >OrderDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderRepository.html" data-type="entity-link" >OrderRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link" >Users</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DishAlreadyExists.html" data-type="entity-link" >DishAlreadyExists</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DishNameValidationPipe.html" data-type="entity-link" >DishNameValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DishService.html" data-type="entity-link" >DishService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExpenseService.html" data-type="entity-link" >ExpenseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExpenseValidationPipe.html" data-type="entity-link" >ExpenseValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InventoryService.html" data-type="entity-link" >InventoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionSerializer.html" data-type="entity-link" >SessionSerializer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticatedGuard.html" data-type="entity-link" >AuthenticatedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsAdmin.html" data-type="entity-link" >IsAdmin</a>
                            </li>
                            <li class="link">
                                <a href="guards/isStaff.html" data-type="entity-link" >isStaff</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});