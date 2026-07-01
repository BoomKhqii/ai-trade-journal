using Microsoft.AspNetCore.Mvc;

namespace AiTradeJournalBackend.Controllers;

[Route("api/[controller]")]
public class HealthController : ControllerBase
{
	[HttpGet]
	public IActionResult Get()
	{
		return Ok(new
		{
			message = "Backend connected",
			status = "Running"
		});
	}
}