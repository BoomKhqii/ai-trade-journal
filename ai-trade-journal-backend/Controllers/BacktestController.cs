using Microsoft.AspNetCore.Mvc;

namespace AiTradeJournalBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BacktestController : ControllerBase
{
	[HttpGet]
	public IActionResult GetMarketResults()
	{
		var dashboardData = new DashboardBacktest
		{
			winRate = 45,
			maximumDrawdown = 20,
			sharpeRatio = 0.342,
			initialBalance = 1750
		};

		return Ok(dashboardData);
		/*
		List < MarketResult > marketResults = new List<MarketResult>
		{
			new MarketResult
			{
				Market = "AUS200",
				WinningTrades = 10,
				LosingTrades = 5,
				BreakEvenTrades = 10
			},

			new MarketResult
			{
				Market = "SPX500",
				WinningTrades = 10,
				LosingTrades = 5,
				BreakEvenTrades = 10
			},

			new MarketResult
			{
				Market = "NAS100",
				WinningTrades = 10,
				LosingTrades = 5,
				BreakEvenTrades = 10
			}
		};
		*/
	}
}

public class DashboardBacktest
{
	public decimal winRate { get; set; }
	public decimal maximumDrawdown { get; set; }
	public decimal sharpeRatio { get; set; }
	public decimal initialBalance { get; set; }
}

public class MarketResult
{
	public string? Market { get; set; }
	public int? WinningTrades { get; set; }
	public int? LosingTrades { get; set; }
	public int? BreakEvenTrades { get; set; }
}

public class EquityData
{

	// These trades needs to be in order
	// Earliest -> Latest
	// Equity curve needs to start from the first trade
	// Order must be handle in the azure database
	public string? Trade { get; set; }
	public decimal? AUS200 { get; set; }
	public decimal? SPX500 { get; set; }
	public decimal? NAS100 { get; set; }
	public decimal? Total { get; set; }
}



/*
app.MapGet("/api/backtest", () =>
{
return Results.Ok(new
{
	/*
		List of all cvs data
		Grab current year
			- Data format: YYYY-xx-xx ...
				using the format we are effectively filtering the data to only include the current year

		Grab amount of winning trades, losing trades, and break even trades
			- take note of the market its from

		Monthly profit
			Grabe monthy trades through format
				- xxxx-MM-xx ...
					grab their pnl
	*/


/*
 const equityData = [
	{ trade: 'T1', AUS200: 1700, SPX500: 1700, NAS100: 1700, Total: 5100 },
	{ trade: 'T2', AUS200: 1760, SPX500: 1680, NAS100: 1710, Total: 5150 },
	{ trade: 'T3', AUS200: 1710, SPX500: 1740, NAS100: 1690, Total: 5140 },
	{ trade: 'T4', AUS200: 1820, SPX500: 1780, NAS100: 1725, Total: 5325 },
	{ trade: 'T5', AUS200: 1900, SPX500: 1810, NAS100: 1790, Total: 5500 },
	{ trade: 'T6', AUS200: 1860, SPX500: 1880, NAS100: 1840, Total: 5580 },
	{ trade: 'T7', AUS200: 1950, SPX500: 1940, NAS100: 1900, Total: 5790 },
];

const monthlyProfitData = [
	{ month: 'Jan', profit: 320 },
	{ month: 'Feb', profit: -120 },
	{ month: 'Mar', profit: 540 },
	{ month: 'Apr', profit: 210 },
	{ month: 'May', profit: -80 },
	{ month: 'Jun', profit: 690 },
	{ month: 'Jul', profit: 410 },
	{ month: 'Aug', profit: 120 },
	{ month: 'Sep', profit: -200 },
	{ month: 'Oct', profit: 370 },
	{ month: 'Nov', profit: 260 },
	{ month: 'Dec', profit: 720 },
];

const marketResults = [
	{
		market: 'AUS200',
		data: [
			{ name: 'Profit', value: 67 },
			{ name: 'Loss', value: 35 },
			{ name: 'BE', value: 12 },
		],
	},
	{
		market: 'SPX500',
		data: [
			{ name: 'Profit', value: 51 },
			{ name: 'Loss', value: 42 },
			{ name: 'BE', value: 8 },
		],
	},
	{
		market: 'NAS100',
		data: [
			{ name: 'Profit', value: 74 },
			{ name: 'Loss', value: 39 },
			{ name: 'BE', value: 15 },
		],
	},
];
//
});
*/