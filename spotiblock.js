            var i, frames;
            frames = document.getElementsByTagName("iframe");
            for (i = 0; i < frames.length; ++i) {
                if (frames[i].parentElement.classList.contains('front')) {
                    if (!frames[i].contentWindow.document.getElementById('spotiblock')) {
                        var ABstyle = frames[i].contentWindow.document.createElement('style');
                        ABstyle.type = 'text/css';
                        ABstyle.innerHTML = ".ads-leaderboard-container{display:none!important;}";
                        frames[i].contentWindow.document.getElementsByTagName('head')[0].appendChild(ABstyle);
                        ABstyle.id = 'spotiblock';
                    }
                }
                if (frames[i].parentElement.classList.contains('root')) {
                    if (!frames[i].contentWindow.document.getElementById('spotiblock')) {
                        var ABstyle = frames[i].contentWindow.document.createElement('style');
                        ABstyle.type = 'text/css';
                        ABstyle.innerHTML = "#header{display:none!important;}.container{max-width:100%!important;}";
                        frames[i].contentWindow.document.getElementsByTagName('head')[0].appendChild(ABstyle);
                        ABstyle.id = 'spotiblock';
                    }
                }   
                if (frames[i].id == "app-player") {
                    if (!frames[i].contentWindow.document.getElementById('spotiblock')) {
                        var ABstyle = frames[i].contentWindow.document.createElement('style');
                        ABstyle.type = 'text/css';
                        ABstyle.innerHTML = "html{height:100%!important;}body{border-bottom:0!important;height:100%!important;}";
                        frames[i].contentWindow.document.getElementsByTagName('head')[0].appendChild(ABstyle);
                        ABstyle.id = 'spotiblock';
                        document.getElementById('now-playing-widgets').style.display = 'none';
                    }
                }   
            }