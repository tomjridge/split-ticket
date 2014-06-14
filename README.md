split.traintimes.org.uk
=======================

This app calculates split ticket possibilities. It is running at
http://split.traintimes.org.uk/ but should run locally without much issue.

Requirements
------------

* redis, for the queueing and front page latest.
* python
* virtualenv unless you like installing things system-wide, in which case you
  should know what you’re doing

Installation
------------

    $ virtualenv venv
    $ source venv/bin/activate
    $ pip install -r requirements.txt

web.py is the WSGI application, you can run this directly with:

    python web.py

Which will start up a web server running on port 8080 by default. You can run
it via your favourite tool for doing so (I’m using gunicorn, behind
nginx and varnish).

You start a backend worker with:

    python worker.py

(I’m running multiple ones via supervisor, there is an example config.)
And you can monitor the workers with rqinfo.
