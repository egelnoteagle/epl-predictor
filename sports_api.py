import requests

def fetch_epl_games():
    url = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328"  # EPL league ID
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data['events']  # Process the events as needed
    return []