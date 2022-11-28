const scriptsPath = '/src/scripts/'

chrome.webNavigation.onCompleted.addListener(() =>
{
	chrome.tabs.getSelected(null, (tab) =>
	{
		var url = tab.url;
		
		[
			{
				name: "Kartable",
				urlPattern: /https:\/\/www\.kartable\.fr\/(.*?)/,
				scriptName: "Kartable.js"

			},
			{
				name: "SchoolMouv",
				urlPattern: /https:\/\/www\.schoolmouv\.fr\/(.*?)/,
				scriptName: "SchoolMouv.js"
			},

			{
				name: "Digischool",
				urlPattern: /https:\/\/www\.digischool\.fr\/(.*?)/,
				scriptName: 'Digischool.js'
			}

		].forEach((key) => 
		{
			if( url.match(key.urlPattern) )
			{
				chrome.tabs.executeScript(
					{ 
						file: scriptsPath + key.scriptName,
						runAt: "document_idle"
					});	
			}
		})

		
	});


});
