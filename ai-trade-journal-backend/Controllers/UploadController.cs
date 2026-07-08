using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UploadController : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> UploadFile([FromForm] IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file uploaded.");

        var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "SavedFiles");

        Directory.CreateDirectory(folderPath);

        var safeFileName = Path.GetFileName(file.FileName);
        var savePath = Path.Combine(folderPath, safeFileName);

        using (var stream = new FileStream(savePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        Console.WriteLine("File saved to: " + savePath);

        return Ok(new
        {
            message = "File saved successfully",
            path = savePath
        });
    }
}