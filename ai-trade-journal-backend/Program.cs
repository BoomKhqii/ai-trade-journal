var builder = WebApplication.CreateBuilder(args);

var reactAppPolicy = "ReactAppPolicy";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: reactAppPolicy, policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// app.UseHttpsRedirection();

app.UseCors(reactAppPolicy);

app.MapControllers();

app.MapGet("/api/health", () =>
{
    return Results.Ok(new
    {
        message = "C# backend is connected to React",
        status = "Running"
    });
});

app.Run();