var pairs =
{
"objectname":{"naming":1}
,"naming":{"scheme":1}
,"scheme":{"cachemanager":1}
,"cachemanager":{"net.sf.ehcache:type=cachemanager":1}
,"net.sf.ehcache:type=cachemanager":{"name=<cachemanager>":1}
,"name=<cachemanager>":{"cache":1}
,"cache":{"net.sf.ehcache:type=cache":1}
,"net.sf.ehcache:type=cache":{"cachemanager=<cachemanagername>":1}
,"cachemanager=<cachemanagername>":{"name=<cachename>":1}
,"name=<cachename>":{"cacheconfiguration":1,"cachestatistics":1}
,"cacheconfiguration":{"net.sf.ehcache:type=cacheconfiguration":1}
,"net.sf.ehcache:type=cacheconfiguration":{"cachemanager=<cachemanagername>":1}
,"cachestatistics":{"net.sf.ehcache:type=cachestatistics":1}
,"net.sf.ehcache:type=cachestatistics":{"cachemanager=<cachemanagername>":1}
}
;Search.control.loadWordPairs(pairs);
