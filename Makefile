heroku:
	git push heroku master

logs:
	heroku logs --tail

shell:
	heroku ps:exec

