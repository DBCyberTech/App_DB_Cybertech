=============
Release Notes
=============

Version 2.0.0
^^^^^^^^^^^^^

New IT Threat Event Types
-------------------------
In this release, IT Threat source types are expanded into ``it_clustered_flow``,
``it_new_cluster``, ``it_obsolete_cluster``, ``it_cluster_activity``, ``it_auto_learned``,
``it_policy_activity``, ``it_new_context``, ``it_new_access``, and ``it_new_flow``.
These source types are used by the new IT Threat suite of
features in dbn version 3.0.0.

This release also marks the completion of the deprication of custom fields.

Version 1.0.0
^^^^^^^^^^^^^

Dealing With Custom Fields
--------------------------

Deprication
***********

Current data from DBN6300 complies with the CEF standard for field values. This
includes a construct of mandating a static key set neccesitating a structure for
use with custom fields. This structure of ``cs1Label=`` followed by ``cs1=``
results in significant message overhead which is not needed in splunk. As such
this structure is being phased out of DBN syslog messages. Current releases will
continue to support exisiting pairs of key/value pairs formatted in this way but
will also be adding a redundant key/value pair. For example current messages
contain:

    ``cs1Label=system identifier cs1=00:00:00:00:00``

This will be replaced with:

    ``cs1Label=system identifier cs1=00:00:00:00:00 system_identifier=00:00:00:00:00``

And eventually simplified to:

    ``system_identifier=00:00:00:00:00``

Search Time Replacement
***********************

In the mean time, if you would like to use custom field values, you can use a
search time extraction like the following:

    ``* | rex mode=sed field=cs1Label "s/ /_/g" | eval {cs1Label}=cs1``

.. note:: Part of the difficulty when using these custom fields is they have the
   potential to have spaces in the label. The ``rex`` part of the above search
   replaces those spaces before using the label as a field key. This will need
   to be done for any such custom field before it can be used as a field name.
