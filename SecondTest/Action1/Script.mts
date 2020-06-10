Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf2.xml_;_
If Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3").Exist(30) Then
	wait 2
	Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3").Click
End If

cuscore = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3").GetROProperty ("innertext")
If cdbl(cuscore) > 10.0 Then
	Reporter.ReportEvent micPass, "score", "Score looks good"
else
	Reporter.ReportEvent micFail, "score", "Score NOT looks good"
End If

Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3").Check CheckPoint("score") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf4.xml_;_
