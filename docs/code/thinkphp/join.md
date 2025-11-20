# 连表
```php
Db::table('think_artist')
    ->alias('a')
    ->join('work w','a.id = w.artist_id')
    ->join('card c','a.card_id = c.id')
    ->select();
```