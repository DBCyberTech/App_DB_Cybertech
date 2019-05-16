User Guide
==========


DBN TA Source Types
----------------------

Splits incoming feed into:

1. ``system_counters``: This source type is used for various system counter information including

	- ``cnt``: An external dump of the internal counter's page, lists stats for incoming feed and engine processing
	- ``sys``: Contains system level information including free memory, cache, and system uptime
	- ``slowsys``: A more complete set of system level information including airflow readings, disk usage, and wear indicators
	- ``dbfwsys``: Information specific to the DBFW process running
2. ``sqli_events``: SQL injection events will be associated with this sourcetype. This includes two subevent types

	- ``distinct_event``: description of the first sql statement which is deemed a potential sql injection attack
	- ``repeat_event``: events which match an injection on a statement already alerted on
3. ``discovery_events``: These alerts are triggered in response to new events within the flows being monitored but without rising to the level of an attack.

	- ``mds_new_user``: A new user is seen for the first time
	- ``mds_new_service``: a new service is seen for the first time
	- ``mds_new_host``: a new host is seen for the first time
	- ``mds_new_listener``: a new listener is seen for the first time
	- ``tally_new_ipseity``: a new context is seen linking client and servicer in dimensions (tally board, user, service, client, server)
4. ``health_events``: contains events mainly involving engineering metrics

	- ``heart_beat``: used to monitor system up status on a more frequent basis than ``dbfwsys``
	- ``engine_start``: used to monitor for engine restarts
	- ``archive``: Indicates status of overnight system archive tool
	- ``dbfw_gc``: Indicates a system restart due to overload of data
	- ``dbdu``: postgres database disk usage
5. ``insider_threat_events``: events related to table level analysis preformed with the insider threat module
6. ``audit``: events exported by native device auditing
7. ``upgrade``: raw dump of upgrade messages for external viewing
8. ``internal``: catch for bad output of internal messages, trashed
