# Soap Capital

Soap Capital is a Blazor .NET 8 web application designed to provide cryptocurrency trading resources. It offers both free access to basic features and premium content through a payment wall. Users can choose to pay via traditional methods using Stripe or through a Bitcoin payment processor called Opennode. The platform is built using clean architecture principles, incorporating CQRS with the Mediator pattern for efficient command and query separation. Data access is handled through Dapper, and it consumes external REST APIs to enhance its functionality. The application is backed by a Microsoft SQL Server database for robust data management.

## Features

- **Cryptocurrency Trading Resources**: Access to various resources and tools to facilitate cryptocurrency trading.
- **Free Package**: Basic features available to all users without any payment requirement.
- **Premium Content**: Access to advanced features and premium resources via a payment wall.
- **Payment Integration**: Support for payment processing using both traditional methods (Stripe) and Bitcoin (Opennode).
- **Clean Architecture**: Modular and maintainable codebase following clean architecture principles.
- **CQRS with Mediator Pattern**: Efficient command and query separation for improved scalability and maintainability.
- **Dapper for Data Access**: Lightweight and high-performance ORM for interacting with the database.
- **REST API Consumption**: Integration with external REST APIs to enrich the application's capabilities.
- **Microsoft SQL Server**: Reliable and scalable database management system for storing application data.

## Tech Stack

- **Blazor .NET 8 Web App**: Building interactive web UIs using C# and HTML.
- **Clean Architecture**: Structuring the application into layers for better maintainability and testability.
- **CQRS with Mediator Pattern**: Separating concerns between commands and queries using mediator for communication.
- **Dapper**: Micro ORM for data access, providing fast database interactions with minimal overhead.
- **REST API Consumption**: Integrating external APIs to extend application functionality.
- **Microsoft SQL Server**: Reliable and scalable database management system for storing application data.
