### Build ClassNotes
dotnet new webapi -n Classnotes.Api
de ClassNotes.Api

### Packages
dotnet add package Microsoft.EntityFrameworkCore  
dotnet add package Microsoft.EntityFramework.Sqlite
dotnet add package Microsoft.EntityFramework.Design
dotnet add package Microsoft.EntityFramework.Tools 
dotnet add package Swashbuckle.AspNetCore          

### If not automatically added -> add VsStudio
dotnet new sln -n ClassNotes
dotnet sln add "ClassNotes.Api\ClassNotes.Api.csproj"

### Create Frontend
npm create vite@latest frontend
cd frontend
npm run dev