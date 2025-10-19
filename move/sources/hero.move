module challenge::hero;

use std::string::String;

// ========= STRUCTS =========
public struct Hero has key, store {
    id: UID,
    name: String,
    image_url: String,
    power: u64,
}

public struct HeroMetadata has key, store {
    id: UID,
    timestamp: u64,
}

// ========= FUNCTIONS =========

#[allow(lint(self_transfer))]
public fun create_hero(name: String, image_url: String, power: u64, ctx: &mut TxContext) {
    
    // TODO: Create a new Hero struct with the given parameters
    let hero = Hero {
        id: object::new(ctx),
        name: name,
        image_url: image_url,
        power: power
    };

    // TODO: Create HeroMetadata and freeze it for tracking
    // DÜZELTME: Sadece struct'ta var olan alanları ekliyoruz.
    let metadata = HeroMetadata {
        id: object::new(ctx),
        timestamp: ctx.epoch_timestamp_ms() // Hint: Use ctx.epoch_timestamp_ms()
    };
    
    //TODO: Use transfer::freeze_object() to make metadata immutable
    transfer::freeze_object(metadata);

    // TODO: Transfer the hero to the transaction sender
    transfer::public_transfer(hero, ctx.sender());
}

// ========= GETTER FUNCTIONS =========

public fun hero_power(hero: &Hero): u64 {
    hero.power
}

#[test_only]
public fun hero_name(hero: &Hero): String {
    hero.name
}

#[test_only]
public fun hero_image_url(hero: &Hero): String {
    hero.image_url
}

#[test_only]
public fun hero_id(hero: &Hero): ID {
    object::id(hero)
}

