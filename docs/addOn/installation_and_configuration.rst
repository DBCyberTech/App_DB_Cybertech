Installation and Configuration
==============================



Installation Steps
------------------

Step 1: Install the Add-on
**************************

Install the DB CyberTech TA by downloading the latest release from `DB Cybertech Add-on <https://splunkbase.splunk.com/app/4065/>`_. 
Or if you want to test beta code, from `Github <https://github.com/DBCyberTech/TA-DB_CyberTech>`_

Configure TA-DB_CyberTech
-------------------------

.. note:: Configuring Recieve Time
  When using older versions (pre 4.2.4), you may need to adjust the timestamp sourcing in the TA. On supported messages
  the time reciept is sourced from a field within the message ``rt``. This field is a unix timestamp in seconds since
  epoch at the time the message is generated within the DBC-Security product. This will give you the most accurate time
  stamp for these events. However, on older versions, this field is missing from some syslog messages. This is a known 
  bug and is fixed in future versions. In the meantime, please adjust the ``time_format`` and ``time_prefix`` fields 
  in the ``props.conf`` to match the timestamp format used by your splunk interpreter to instead use recieved time.

Step 2: Associate input with TA 
*******************************

After installation, you'll need to associate your incoming data with the Add-on's sourcetype. This will apply the add-on's transforms
and settings to the data stream. Do this through the add data UI. For sourcetype, use ``dbn``. You can then associate the traffic with
either the DB Cybertech Add-on or App if you're using it. 