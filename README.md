### Traditional web applications vs Single Page Applications (SPA)

ASP.NET Core MVC => Traditional web applications
    => Server side code is genereted by the Framework ASP.NET Core (Kestral)
    => HTML + CSS + Razor Syntax => HTML by ASP.NET Core and send to browser for each and every http request

### SPA Angular
    => AJAX in Browser that will enable to refresh only fragment of the page
    
    1. When you make a First request to the URL => http://localhost:4200
    2. Browser will recieve all the HTML of all the pages from the Server - 200 Pages
       1. HTML of HomePage, MovieDetails, CastDetails, Login, Register, CreateMovie, TopMovies, TopRatedMovies, PurchasesMovies, FavoriteMovies
    3. When you click on Movie image, based on URL http://localhost:4200/movies/details/2 => MovieDetails Component 
       1. Browser will make an AJAX GET call to API => http://localhost:5001/api/movies/2 => JSON Data
       2. It will take the JSON data and put inside the MovieDetails and show the view.
    4. When you click on Login button on NavBar
       1. HTML of Login Page
       2. email/password => submit
       3. AJAX POST => http://localhost:5001/api/account/login JSON 
    5. Modularize the application
       1. Public Module => all the public pages - Home, Movie Details, Cast Details Page
       2. Admin Module => CreateMovie, CreateCast =>  Route Guards - AdminGuard
          1. We can load when user loged in is Admin,
          2. http://localhost:4200/admin/createmovie, http://localhost:4200/admin/createcast
          3. AdminGuard => Role of admin
       3. UserModule => PurchasesMovies, FavoriteMovies
          1. http://localhost:4200/user/purchases, http://localhost:4200/user/favorites
          2. AuthenticationGuard, check if the user is login 
       4. AccountModule => login, register 
          1. http://localhost:4200/account/login, http://localhost:4200/account/register
          2. CanLoad => only when URL has account load this module
       5. SharedModule
          1. MovieCard
          2. Models
       6. CoreModule
          1. Layout (Header, Footer)
          2. Services
          3. Validation

### Angular
    1. React - Facebook
    2. Vue
 1. Angular is very popular among .NET Teams
 2. Angular uses Typescript (Superset of JS and type safe) instead of JavaScript
 3. C#, Java
 4. Typescript willbe transpiled into JS and send to the browser
 5. Typescript is from Microsoft and its designed by same person who desinged C#

2011 => AngularJS => Google 1, 1.1, 1.2, 1.3 ...1.5 => JavaScript
2016 => Angualar 2 => TypeScript, 2,4,5...13 => 6 months Google releases new Angular version

#### Angular Bootstrapping
1. main.ts will be run => AppModule
2. Decorators simialar to C# Attributes
3. Any TypeScript class becomes Angular module with NgModule decorator
4. Components in Angular are similar to Controllers in MVC
5.  Any TypeScript class becomes Angular Component with Component decorator

#### Services

Services use DI, make a AJAX call to API using  HttpClient => uses these  (XMLHttpRequest or Fetch API)
Observables

1. Components (HomeComponent) => Service (MovieService) uses HttpClinet to make Ajax call to Web API
2. API returns JSON data which is wrapped on Observable, Observable<MovieCard>
3. Component will subscribe to the Observable returned from Service and build the modeldata

Observable Pattern => 

Youtube => Channels ABC => Uploads the videos
Notification => subscribe to the channel and bell icon

Only when you subscribe you are gonna run the observable... Lazy

var bigmovies =  movies.where(m => m.revenue >1000).Tolist();
